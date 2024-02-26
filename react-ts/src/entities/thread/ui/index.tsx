import {ThreadEntity} from "@/shared/api";
import {ReactNode} from "react";
import './index.css';

interface ThreadProps {
    thread: ThreadEntity,
    initComment: ReactNode,
    children: ReactNode,
}

export const Thread = ({ thread, initComment, children}: ThreadProps) => {
    return (
        <div className="thread">
            <div className="thread-header">
                {/*<span className="thread-id">Thread ID: {thread.threadId}</span>*/}
                <span className="thread-popularity">Popularity: {thread.popularity}</span>
            </div>
            <div className="thread-init-comment">
                {initComment}
            </div>
            {children}
        </div>
    );
}
