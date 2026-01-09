import { Video } from "../types/types";
import YouTubeEmbed from "./YouTubeEmbed";

const VideoComponent = (props: { video: Video }) => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-[20px] mb-3">{props.video.title}</p>
            {props.video.yt_id ?
                (
                <YouTubeEmbed id={props.video.yt_id} type={props.video.type} />
            ) : (
                <>Maciek! Dodaj YT ID</>
            )}
        </div>
    );
}


export default VideoComponent