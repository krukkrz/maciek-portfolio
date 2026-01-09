import {Portfolio} from "../types/types";
import SectionComponent from "./SectionComponent";

const VideoList = (props: {portfolio: Portfolio}) => {
    return <>
        {props.portfolio.sections.map(s => {
            return <SectionComponent section={s}/>
        })}
    </>
}

export default VideoList