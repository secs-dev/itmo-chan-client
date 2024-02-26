import {useEffect, useState} from "react";
import {TopicEntity} from "@/shared/api/interfaces.ts";
import {fetchTopics} from "@/wigets/topic-list/api.ts";
import "./ui.css";
import {Link} from "atomic-router-react";

export const TopicList = () => {
    const [topics, setTopics] = useState<TopicEntity[]|null>(null);
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