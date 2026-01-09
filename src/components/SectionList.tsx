import {Portfolio} from "../types/types";
import SectionComponent from "./SectionComponent";

const SectionList = (props: {portfolio: Portfolio}) => {
    return <div className="flex flex-col gap-[100px]">
        {props.portfolio.sections.map(s => {
            return <SectionComponent section={s}/>
        })}
    </div>
}

export default SectionList