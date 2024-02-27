interface VideoProps {
    videoId: number;
}
const BACKEND_URL = "http://localhost:8080"

export const MyVideo = ({videoId}: VideoProps) => {
    return (
        <video style={{padding: "2px", height: "100%"}} width="200" controls >
            <source src={`${BACKEND_URL}/api/media/vid/${videoId}`} type='video/mp4;'/>
        </video>
    )
}