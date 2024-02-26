interface ReplyProps {
    commentId: number;
}

export const Reply = ({commentId}: ReplyProps) => {
    return (
        <div>
            <h2> id: {commentId}</h2>
            <span>Reply is not supported.</span>
        </div>
    )
}