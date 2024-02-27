import {useEffect, useState} from "react";
import {ThreadCommentsEntity, TopicThreadEntity} from "@/shared/api/interfaces.ts";
import {Comment, Thread} from "@/entities";
import {Button, Spin} from "antd";
import "./ui.css"
import {fetch} from "../model";
import {ThreadForm} from "@/entities/threadForm";

interface TopicThreadsProps {
    topicId: number,
    openDrawer: any,
}
export const TopicThreads = ({topicId, openDrawer}: TopicThreadsProps) => {
    const [topicThreads, setTopicThreads] = useState<TopicThreadEntity|null>(null);
    const [threads, setThreads] = useState<ThreadCommentsEntity[]>([]);
    const [expandedThreads, setExpandedThreads] = useState<number[]>([])
    const [addNewThread, setAddNewThread] = useState(false)
    const [submitThread, setSubmitThread] = useState(false)
    const onCloseThread = () => {
        setAddNewThread(false)
    }

    useEffect(() => {
        fetch({topicId, setTopicThreads, setThreads});
    }, [])
    return (
        <div className="topic-threads">
            {topicThreads ? (
                <>
                    <h2>{topicThreads.topic.name}</h2>
                    <Button style={{display: "flex"}} onClick={()=>setAddNewThread(true)}>Добавить новый тред</Button>
                    {addNewThread ? (
                        <>
                        <Button onClick={()=>setSubmitThread(true)}>Отправить</Button>
                        <ThreadForm
                            topicId={topicId}
                            onClose={onCloseThread}
                            submitThread={submitThread}
                            setSubmitThread={setSubmitThread}
                        >
                        </ThreadForm> </>): <></>
                    }
                    <div className="threads">
                        {
                            threads.map(thread => (
                               <Thread
                                   key = {thread.thread.threadId}
                                   thread={thread.thread}
                                   initComment={<Comment comment={thread.comments.filter(comment => comment.comment.commentId === thread.thread.initCommentId).pop()} openDrawer={openDrawer}/>}
                               >
                                   <div className="thread-comments">
                                   {
                                       thread.comments
                                       .filter(c => c.comment.commentId !== thread.thread.initCommentId)
                                       .slice(
                                           expandedThreads.includes(thread.thread.threadId) ? 0 : Math.max(thread.comments.length - 5, 0), thread.comments.length - 1 )
                                       .map(comment => {
                                           return <Comment key={comment.comment.commentId} comment={comment}
                                                           openDrawer={openDrawer}/>
                                    })}
                                   </div>
                                   { !expandedThreads.includes(thread.thread.threadId) && thread.comments.length > 4 ? (<Button onClick={()=>setExpandedThreads(expandedThreads.concat(thread.thread.threadId))}>Раскрыть все комментарии</Button>) : <></>}
                               </Thread>
                            ))
                        }
                    </div>
                </>
            ) : (
                <Spin tip="Loading" size="large" className="loading-spin">
                    <div/>
                </Spin>
            )}
        </div>
    );
};