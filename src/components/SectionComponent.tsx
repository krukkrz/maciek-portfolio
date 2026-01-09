import {Section} from "../types/types";
import VideoComponent from "./VideoComponent";

const SectionComponent = (props: {section: Section}) => {
    return <div className="
        flex
        flex-col
        gap-2
        w-[100%]
        ">
            <h2 className="font-black text-[40px]">{props.section.title}</h2>
            <div className="flex flex-col gap-10">
                {props.section.videos.map(v => {
                    return <VideoComponent video={v}/>
                })}
            </div>
    </div>
}

export default SectionComponent