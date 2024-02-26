import {ThreadEntity} from "@/shared/api";
import {ReactNode} from "react";
import './index.css';

interface ThreadProps {
    thread: ThreadEntity,
    initComment: ReactNode,
    comments: ReactNode[],
}

export const Thread = ({ thread, initComment, comments }: ThreadProps) => {
    return (
        <div className="thread">
            <div className="thread-header">
                {/*<span className="thread-id">Thread ID: {thread.threadId}</span>*/}
                <span className="thread-popularity">Popularity: {thread.popularity}</span>
            </div>
            <div className="thread-init-comment">
                {initComment}
            </div>
            <div className={"thread-comments"}>
                <p>Comments</p>
                {comments}
            </div>
        </div>
    );
}
