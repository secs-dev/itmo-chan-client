import {useEffect, useState} from "react";
import {TopicDto, TopicEntity} from "@/shared/api/interfaces.ts";
import {fetchTopics} from "@/wigets/topic-list/api.ts";
import "./ui.css";
import {Link} from "atomic-router-react";
import {Button} from "antd";
import {$isAdminOrModerator} from "@/features/auth/model";
import {TopicForm} from "@/wigets/topicForm/ui/TopicForm.tsx";

export const TopicList = () => {
    const [topics, setTopics] = useState<TopicEntity[]|null>(null)
    const [addNewTopic, setAddNewTopic] = useState<boolean>(false)
    const [submitNewTopic, setSubmitNewTopic] = useState<boolean>(false)
    const [newTopic, setNewTopic] = useState<TopicDto | null>(null)

    useEffect(() => {
        async function fetch() {
            try {
                const data = await fetchTopics();
                setTopics(data)
            } catch (error) {
                console.error('Error fetching topic threads:', error);
            }
        }
        fetch();
    }, [])

    return (
        <div className="topic-list">
            {$isAdminOrModerator.getState() ? <Button>Add new topic</Button> : <></>}
            <Button style={{display: "flex"}} onClick={()=>setAddNewTopic(true)}>Добавить новый тред</Button>
            {addNewTopic ? (
                <>
                    <Button onClick={()=>setSubmitNewTopic(true)}>Отправить</Button>
                    <TopicForm>
                        setNewTopic={setNewTopic}
                    </TopicForm> </>): <></>
            }
            {topics ? (
                <div className="topic-list-div">
                    {topics.map(topic => (
                        <Link  className="topic-list-button" key={topic.topicId} to={"/topic/"+topic.topicId}>
                            <h2>{topic.name}</h2>
                            <p>{topic.description}</p>
                        </Link>)
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};