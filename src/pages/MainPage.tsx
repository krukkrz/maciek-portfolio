import SectionList from "../components/SectionList";
import {portfolio} from "../data/portfolio";

const MainPage = () => {
    return (
        <div className="flex flex-col bg-[#FFD557]">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-10 items-center mt-20">
                <h1 className="font-black text-[90px]">Maciej Palmowski</h1>
                <p className="text-[20px]">
                    Super duper editor. Greatest video editor of all time. Don't wait, just call me baby!
                </p>
                <SectionList portfolio={portfolio}/>
            </div>
        </div>
    )
}

export default MainPage