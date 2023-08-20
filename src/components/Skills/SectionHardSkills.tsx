import { useDispatch } from "react-redux"
import { FcPrevious } from "react-icons/fc"
import { switchDefault } from "../../redux/features/skillsSlice"
import "./Skills.sass"
import Progress from "../Progress/Progress"

class Tech {
    public name: string
    public level: number

    public constructor(name: string, level: number){
        this.name = name
        this.level = level
    }

    public display(){
        return (
            <div className="hardskill-element" key={this.name}>
                <div className="hardskill-name">{this.name}</div>
                <Progress level={this.level} />
            </div>
        )
    }
}

export default function SectionHardSkills(){
    const dispatch = useDispatch()

    const backToDefault = () => {
        dispatch(switchDefault())
    }

    const techs = [
        [
            new Tech("HTML", 70),
            new Tech("CSS/SASS", 70),
            new Tech("Bootstrap", 60),
            new Tech("Javascript/Typescript", 75),
            new Tech("React", 75),
        ],
        [
            new Tech("Python", 80),
            new Tech("Django", 80),
            new Tech("PHP", 50),
            new Tech("Shell Scripting", 60),
        ]
    ]

    return (
        <section id="hardskills">
            <div className="ss-prev" onClick={backToDefault}>
                <FcPrevious />
            </div>
            <div className="hs-container">
                <div className="hs-col">
                    {techs[0].map(tech => tech.display())}
                </div>
                <div className="hs-col">
                    {techs[1].map(tech => tech.display())}
                </div>
            </div>
        </section>
    )
}