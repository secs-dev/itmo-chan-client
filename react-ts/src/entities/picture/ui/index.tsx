interface PictureProps {
    pictureId: number;
}

export const Picture = ({pictureId}: PictureProps) => {
    return (
        <div>
            <h2> id: {pictureId}</h2>
            <span>Picture is not supported.</span>
        </div>
    )
}