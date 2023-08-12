import { useDispatch, useSelector } from "react-redux"
import { FcPrevious } from "react-icons/fc"
import { switchDefault } from "../../redux/features/skillsSlice"
import "./Skills.sass"
import Progress from "../Progress/Progress"

class Language{
    public name: string
    public level: number
    public niveau: string

    public constructor(name: string, level: number, niveau: string){
        this.name = name
        this.level = level
        this.niveau = niveau
    }

    public display(){
        return (
            <div className="hardskill-element" key={this.name}>
                <div className="hardskill-name">{this.name} ({this.niveau})</div>
                <Progress level={this.level} />
            </div>
        )
    }
}

export default function SectionLanguages(){
    const language_state = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()

    const backToDefault = () => {
        dispatch(switchDefault())
    }

    const languages = {
        fr: [
            new Language("Français", 100, "Natif"),
            new Language("Anglais", 85, "C1"),
            new Language("Espagnol", 65, "B2"),
            new Language("Néerlandais", 50, "B1")
        ],
        en: [
            new Language("French", 100, "Native"),
            new Language("English", 85, "C1"),
            new Language("Spanish", 65, "B2"),
            new Language("Dutch", 50, "B1")
        ]
    }

    return (
        <section id="languages">
            <div className="ss-prev" onClick={backToDefault}>
                <FcPrevious />
            </div>
            <div className="hs-container">
                {language_state==="en"? languages.en.map(lang => lang.display()) : languages.fr.map(lang => lang.display())}
            </div>
        </section>
    )
}