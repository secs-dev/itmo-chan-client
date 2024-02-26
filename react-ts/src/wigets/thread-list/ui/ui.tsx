import {useEffect, useState} from "react";
import {ThreadCommentsEntity, TopicThreadEntity} from "@/shared/api/interfaces.ts";
import {Comment, Thread} from "@/entities";
import {Spin} from "antd";
import "./ui.css"
import {fetch} from "../model";
interface TopicThreadsProps {
    topicId: number,
}
export const TopicThreads = ({topicId}: TopicThreadsProps) => {
    const [topicThreads, setTopicThreads] = useState<TopicThreadEntity|null>(null);
    const [threads, setThreads] = useState<ThreadCommentsEntity[]>([]);
    useEffect(() => {
        fetch({topicId, setTopicThreads, setThreads});
    }, [])
//TODO make comment-list widget
    return (
        <div className="topic-threads">
            {topicThreads ? (
                <>
                    <h2>{topicThreads.topic.name}</h2>
                    <div className="threads">
                        {
                            threads.map(thread => (
                               <Thread
                                   key = {thread.thread.threadId}
                                   thread={thread.thread}
                                   initComment={<Comment comment={thread.comments.filter(comment => comment.comment.commentId === thread.thread.initCommentId).pop()}/>}
                                   comments={ thread.comments.filter(c => c.comment.commentId !== thread.thread.initCommentId).map(comment => {
                                       return <Comment key={comment.comment.commentId} comment={comment}/>
                                   })}/>
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