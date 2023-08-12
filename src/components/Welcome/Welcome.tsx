import { useSelector } from "react-redux"
import "./Welcome.sass"
import { motion } from "framer-motion"

class WelcomeData{
    public en: string
    public fr: string

    public constructor(en: string, fr: string){
        this.en = en
        this.fr = fr
    }

    public display(lang: string){
        const variants = {
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {duration: 2}},
        }
        if (lang === "en"){
            return (
                <motion.span initial="hidden" animate="visible" variants={variants}  className="w-title">{this.en}</motion.span>
            )
        } else if(lang === "fr"){
            return (
                <motion.span initial="hidden" animate="visible" variants={variants} className="w-title">{this.fr}</motion.span>
            )
        }
    }
}

export default function Welcome(){
    const language = useSelector((state: any) => state.language.value)
    const message = new WelcomeData("Welcome", "Bienvenue")

    return (
        <section id="welcome">
            {language==="en"? message.display("en") : message.display("fr")}
        </section>
    )
}