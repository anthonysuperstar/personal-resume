import "./Background.sass"
import { useSelector } from "react-redux"
import Default from "./Default"
import Academic from "./Academic"
import Professional from "./Professional"

export default function Background(){
    const background_state = useSelector((state: any) => state.background.value)
    return (
        <section id="background">
            {background_state==="default"? <Default /> : background_state==="academic"? <Academic /> : <Professional />}
        </section>
    )
}