import {Image} from "antd";

interface PictureProps {
    pictureId: number;
}

const BACKEND_URL = "http://localhost:8080"

export const Picture = ({pictureId}: PictureProps) => {
    return (
            <Image style={{padding: "2px"}} src={`${BACKEND_URL}/api/media/pic/${pictureId}`} width={200} ></Image>
    )
}