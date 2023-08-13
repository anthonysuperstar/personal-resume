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

    return(
        <div className="nav-mobile">
            <div className="burger-icon">
                <img src={!visible? burger : cross} onClick={handleClickMenu} alt="" />
            </div>
        </div>
    )
}