import VideoList from "../components/VideoList";
import {portfolio} from "../data/portfolio";

const MainPage = () => {
    return (
        <>
            <h1>Maciej Palmowski</h1>
            <p>
                Super duper editor. Greatest video editor of all time. Don't wait, just call me baby!
            </p>
            <VideoList portfolio={portfolio}/>
        </>
    )
}

export default MainPage