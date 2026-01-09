import {Section} from "../types/types";
import VideoComponent from "./VideoComponent";

const SectionComponent = (props: {section: Section}) => {
    return <div>
        <h2>{props.section.title}</h2>
        {props.section.videos.map(v => {
            return <VideoComponent video={v}/>
        })}
    </div>
}

export default SectionComponent