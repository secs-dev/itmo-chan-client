interface PollProps {
    pollId?: number;
}

export const Poll = ({pollId}: PollProps) => {
    return (
        pollId ?
        <div>
            <h2> id: {pollId}</h2>
            <span>Poll is not supported.</span>
        </div>
        : <></>
    )
}