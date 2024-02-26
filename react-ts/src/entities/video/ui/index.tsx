interface VideoProps {
    videoId: number;
}

export const Video = ({videoId}: VideoProps) => {
    return (
        <div>
            <h2> id: {videoId}</h2>
            <span>Video is not supported.</span>
        </div>
    )
}