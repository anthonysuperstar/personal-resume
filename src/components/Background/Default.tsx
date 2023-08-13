import { useDispatch, useSelector } from "react-redux"
import { switchAcademic, switchProfessional } from "../../redux/features/backgroundSlice"
import { motion } from "framer-motion"

export default function Default(){
    const language_state = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()

    const toAcademic = () => {
        dispatch(switchAcademic())
    }

    const toProfessional = () => {
        dispatch(switchProfessional())
    }

    return(
        <div className="ba-container">
            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: .8}} className="b-col b-academic" onClick={toAcademic}>
                <p>{language_state==="en"? "Education" : "Scolarité"}</p>
            </motion.div>
            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: .8}} className="b-col b-professional" onClick={toProfessional}>
                <p>{language_state==="en"? "Professional" : "Professionnel"}</p>
            </motion.div>
        </div>
    )
}