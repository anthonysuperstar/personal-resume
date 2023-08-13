import "./Resume.sass"
import { useSelector } from "react-redux"
import resume_en from "../../img/resume_en.jpg"
import resume_fr from "../../img/resume_fr.jpg"
import { motion } from "framer-motion"

export default function Resume(){
    const language = useSelector((state: any) => state.language.value)
    
    return (
        <section id="resume">
            <div className="res-container">
                <motion.div whileHover={{scale: 1.05}} transition={{duration: .1}} className="res-link">
                    <a href="https://drive.google.com/uc?export=download&id=1L7Q0x6Ews_WXNdCwawbpo9064moU47zT" target="_blank">
                        <span>En</span>
                    </a>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}} transition={{duration: .1}} className="res-link">
                    <a href="https://drive.google.com/uc?export=download&id=1pzwOy65RmXkLhOnDGqFANQWoKx0FO7sf" target="_blank">
                        <span>Fr</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}