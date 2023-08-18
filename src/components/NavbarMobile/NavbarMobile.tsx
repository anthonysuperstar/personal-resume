import "./NavbarMobile.sass"
import { useDispatch, useSelector } from "react-redux"
import { switchEn, switchFr } from "../../redux/features/languageSlice"
import { Link } from "react-scroll"
import { GrLinkedinOption } from 'react-icons/gr'
import { FaSoundcloud } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { useState } from "react"
import burger from '../../img/bar.png'
import cross from '../../img/fermer.png'

export default function NavbarMobile(){
    const [visible, setVisible] = useState(false)
    const language = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()

    const handleSwitchFr = () =>{
        dispatch(switchFr())
        console.log(language)
    }

    const handleSwitchEn = () => {
        dispatch(switchEn())
        console.log(language)
    }

    const handleClickMenu = () => {
        !visible? setVisible(true) : setVisible(false)
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
        return (
            <tr>
                <Link className="na-li-mobile" to={link.link} key={link.name} spy={true} smooth={true} onClick={()=>{setVisible(false)}} offset={0} duration={1000}>{link.name}</Link>
            </tr>
        ) 
    })
    const fr_mapped = content.fr.map((link) => {
        return (
            <tr>
                <Link className="na-li-mobile" to={link.link} key={link.name} spy={true} smooth={true} onClick={()=>{setVisible(false)}} offset={0} duration={1000}>{link.name}</Link>
            </tr>
        )
    })


    return(
        <div className={!visible? "nav-mobile closed" : "nav-mobile"}>
            <div className="burger-icon">
                <img src={!visible? burger : cross} onClick={handleClickMenu} alt="" />
            </div>
            <table className={!visible? "menu none" : "menu"}>
                {language === "en"? en_mapped : fr_mapped}
            </table>
            
        </div>
    )
}