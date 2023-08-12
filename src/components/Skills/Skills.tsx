import SectionDefault from "./SectionDefault"
import SectionHardSkills from "./SectionHardSkills"
import SectionLanguages from "./SectionLanguages"
import SectionSoftSkills from "./SectionSoftSkills"
import "./Skills.sass"
import { useSelector } from "react-redux"

export default function Skills(){
    const skills = useSelector((state: any) => state.skills.value)

    return (
        <div id="sk">
            {skills==="default"? <SectionDefault /> : skills==="softSkills"? <SectionSoftSkills /> : skills==="hardSkills"? <SectionHardSkills /> : <SectionLanguages />}
        </div>
    )
}