import {Image} from "antd";
import {BACKEND_URL} from "@/shared/api";

interface PictureProps {
    pictureId: number;
}

export const Picture = ({pictureId}: PictureProps) => {
    return (
            <Image style={{padding: "2px"}} src={`${BACKEND_URL}/api/media/${pictureId}`} width={200} ></Image>
    )
}