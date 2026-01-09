import {VideoType} from "../types/types";

const YouTubeEmbed = (props: { id: string, type?: VideoType }) => {
    const isVertical = props.type === 'VERTICAL';

    return (
        <iframe
            className={isVertical ? "max-w-[315px] aspect-[9/16]" : "w-full aspect-video"}
            src={"https://www.youtube.com/embed/" + props.id}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    );
};

export default YouTubeEmbed;