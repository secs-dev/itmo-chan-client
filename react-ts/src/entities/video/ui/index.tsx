import {BACKEND_URL} from "@/shared/api";

interface VideoProps {
    videoId: number;
}

export const MyVideo = ({videoId}: VideoProps) => {
    return (
        <video style={{padding: "2px", height: "100%"}} width="200" controls >
            <source src={`${BACKEND_URL}/api/media/${videoId}`} type='video/mp4;'/>
        </video>
    )
}