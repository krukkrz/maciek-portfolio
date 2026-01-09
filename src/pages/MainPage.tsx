import SectionList from "../components/SectionList";
import {portfolio} from "../data/portfolio";

const MainPage = () => {
    return (
        <div className="flex flex-col bg-[#FFD557]">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-10 items-center mt-20 text-center">
                <h1 className="font-black text-[40px] md:text-[90px]">Mick Palmowski</h1>
                <p className="text-[25px]">
                    It's Mick here - Lodz Filmschool graduate with over 10 years of experience in editing variety forms of videos.
                </p>
                <SectionList portfolio={portfolio}/>
            </div>
        </div>
    )
}

export default MainPage
