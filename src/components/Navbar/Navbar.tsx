import "./Navbar.sass"
import { useState, useEffect } from "react"
import { GrLinkedinOption } from 'react-icons/gr'
import { FaSoundcloud } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { switchEn, switchFr } from "../../redux/features/languageSlice"
import { Link } from "react-scroll"
import { motion } from "framer-motion"



export default function Navbar(){
    const [job, setJob] = useState(0)
    const language = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()
    
    const changeJob = () => {
        setJob(prevJob => (prevJob + 1) % 3);

        setTimeout(changeJob, 2500);
    };

    useEffect(() => {
        const timeoutId = setTimeout(changeJob, 2500);

        return () => {
            clearTimeout(timeoutId);
        };
    });

    const handleSwitchFr = () =>{
        dispatch(switchFr())
        console.log(language)
    }

    const handleSwitchEn = () => {
        dispatch(switchEn())
        console.log(language)
    }

    const content = {
        en : [
            {
                link: "welcome",
                name: "Home"
            },
            {
                link: "intro",
                name: "About Me"
            },
            {
                link: "sk",
                name: "Skills"
            },
            {
                link: "background",
                name: "Background"
            },
            {
                link: "portfolio",
                name: "Portfolio"
            },
            {
                link: "resume",
                name: "Resume"
            }
        ],
        fr: [
            {
                link: "welcome",
                name: "Accueil"
            },
            {
                link: "intro",
                name: "A propos de moi"
            },
            {
                link: "sk",
                name: "Compétences"
            },
            {
                link: "background",
                name: "Parcours"
            },
            {
                link: "portfolio",
                name: "Portfolio"
            },
            {
                link: "resume",
                name: "CV"
            }
        ]
    }
    
    const en_mapped = content.en.map((link) => {
        return <Link className="na-li" to={link.link} spy={true} smooth={true} offset={0} duration={1000}>{link.name}</Link> 
    })
    const fr_mapped = content.fr.map((link) => {
        return <Link className="na-li" to={link.link} spy={true} smooth={true} offset={0} duration={1000}>{link.name}</Link>
    })

    return (
        <>
            <div className="lang-switch">
                {language==="en" ? <span className="lang n-active" onClick={handleSwitchEn}>EN</span> : <span className="lang" onClick={handleSwitchEn}>EN</span>}
                -
                {language==="fr" ? <span className="lang n-active" onClick={handleSwitchFr}>FR</span> : <span className="lang" onClick={handleSwitchFr}>FR</span>}
            </div>
            <div className="nb">
                <div className="greet">
                    ANTHONY MULAMBA
                </div>
                <motion.div className="stack" initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }} transition={{duration: .7}}>
                    {job === 0? "React - Typescript" : job === 1? "Django - Python" : job === 2? "Fullstack Web Developer" : ""}
                </motion.div>
                <nav className="nav">
                    {language==="en"? en_mapped : fr_mapped}
                </nav>
                <motion.footer>
                    <motion.span whileHover={{rotate: 5, scale: 1.2}}>
                        <a href="https://www.linkedin.com/in/anthony-mulamba/" target="_blank" rel="noreferrer">
                            <GrLinkedinOption />
                        </a>
                    </motion.span>
                    <motion.span whileHover={{rotate: 5, scale: 1.2}}>
                        <a href="https://soundcloud.com/fication1" target="_blank" rel="noreferrer">
                            <FaSoundcloud />
                        </a>
                    </motion.span>
                    <motion.span whileHover={{rotate: 5, scale: 1.2}}>
                        <a href="https://github.com/anthonysuperstar" target="_blank" rel="noreferrer">
                            <BsGithub />
                        </a>
                    </motion.span>
                </motion.footer>
            </div>
        </>
    )
}