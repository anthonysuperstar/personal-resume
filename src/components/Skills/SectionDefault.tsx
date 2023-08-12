import { useDispatch, useSelector } from "react-redux"
import { switchHardSkills, switchLanguages, switchSoftSkills } from "../../redux/features/skillsSlice"
import { motion } from "framer-motion"

export default function SectionDefault(){
    const language = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()

    const displaySoftskills = () => {
        dispatch(switchSoftSkills())
    }

    const displayHardSkills = () => {
        dispatch(switchHardSkills())
    }

    const displayLanguages = () => {
        dispatch(switchLanguages())
    }

    return(
        <section id="skills">
            <div className="s-row">
                <motion.div whileHover={{scale: 1.05}} className="s-col" onClick={displaySoftskills}>
                    <p>Soft Skills</p>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}} className="s-col" onClick={displayHardSkills}>
                    <p>Tech Skills</p>
                </motion.div>
            </div>
            <div className="s-row">
                <motion.div whileHover={{scale: 1.05}} className="s-col" onClick={displayLanguages}>
                    <p>{language==="en"? "Languages" : "Langues"}</p>
                </motion.div>
            </div>
        </section>
    )
}