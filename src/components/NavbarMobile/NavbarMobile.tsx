import "./NavbarMobile.sass"
import { useDispatch, useSelector } from "react-redux"
import { switchEn, switchFr } from "../../redux/features/languageSlice"
import { Link } from "react-scroll"
import { GrLinkedinOption } from 'react-icons/gr'
import { FaSoundcloud } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

export default function NavbarMobile(){
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

    return(
        <div className="nav-mobile">
            NAVMOBILE
        </div>
    )
}