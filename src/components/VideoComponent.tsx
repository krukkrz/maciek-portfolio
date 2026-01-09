import { Video } from "../types/types";
import YouTubeEmbed from "./YouTubeEmbed";
import InstagramEmbed from "./InstagramEmbed";

const VideoComponent = (props: { video: Video }) => {
    return (
        <>
            <p>{props.video.title}</p>
            {props.video.yt_id ? (
                <YouTubeEmbed id={props.video.yt_id} />
            ) : props.video.ig_id ? (
                <InstagramEmbed id={props.video.ig_id} />
            ) : (
                <>Maciek! Coś napsułeś!</>
            )}
        </>
    );
}


export default VideoComponent