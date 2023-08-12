import { useDispatch, useSelector } from "react-redux"
import { FcPrevious } from "react-icons/fc"
import "./Skills.sass"
import { switchDefault } from "../../redux/features/skillsSlice"

interface name {
    fr: string,
    en: string
}

class SoftSkill{
    public name: name

    constructor(name: name){
        this.name = name
    }

    public display(lang: string){
        const skillName = lang === "en" ? this.name.en : this.name.fr;
        return <li>{skillName}</li>;
    }
}

export default function SectionSoftSkills(){
    const language = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()

    const backToDefault = () => {
        dispatch(switchDefault())
    }

    const softSkill_list = [
        [
            new SoftSkill({en: "Communication", fr: "Communication"}),
            new SoftSkill({en: "Ambition", fr: "Ambition"}),
            new SoftSkill({en: "Analytic", fr: "Analytique"}),
            new SoftSkill({en: "Autonomy", fr: "Autonomie"}),
            new SoftSkill({en: "Curiosity", fr: "Curiosité"}),
        ],
        [
            new SoftSkill({en: "Team Work", fr: "Travail d'équipe"}),
            new SoftSkill({en: "Time Management", fr: "Gestion du temps"}),
            new SoftSkill({en: "Self-Learning", fr: "Autodidacte"}),
            new SoftSkill({en: "Adaptability", fr: "Adaptabilité"}),
            new SoftSkill({en: "Problem Solving", fr: "Résolution de problèmes"})
        ]
    ]

    const softskill_map = {
        en: [
            softSkill_list[0].map(item => item.display("en")),
            softSkill_list[1].map(item => item.display("en"))
        ],
        fr: [
            softSkill_list[0].map(item => item.display("fr")),
            softSkill_list[1].map(item => item.display("fr"))
        ]
    }

    return (
        <section id="softskills">
            <div className="ss-prev" onClick={backToDefault}>
                <FcPrevious />
            </div>
            <div className="softskill-list">
                <ul>
                    <div className="part">
                        {language==="en"? softskill_map.en[0] : softskill_map.fr[0]}
                    </div>
                    <div className="part">
                        {language==="en"? softskill_map.en[1] : softskill_map.fr[1]}
                    </div>
                </ul>
            </div>
        </section>
    )
}