import "./index.css"
interface ReplyProps {
    commentId: number;
}

export const Reply = ({commentId}: ReplyProps) => {
    return (
        // <div>
            <span className="reply-comment-id">{commentId}</span>
        // </div>
    )
}