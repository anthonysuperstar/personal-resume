import { useDispatch, useSelector } from "react-redux"
import { FcPrevious } from "react-icons/fc"
import { switchDefault } from "../../redux/features/backgroundSlice"

interface bil{
    en: string,
    fr: string
}

class Education{
    public nameOfDegree: bil
    public schoolName: bil
    public major: bil|null
    public is_succeeded: boolean
    public startYear: number|string
    public endYear: number|string

    public constructor(nameOfDegree: bil, schoolName: bil, major: bil|null, is_succeeded: boolean, startYear: number|string, endYear: number|string){
        this.nameOfDegree = nameOfDegree
        this.schoolName = schoolName
        this.major = major
        this.is_succeeded = is_succeeded
        this.startYear = startYear
        this.endYear = endYear
    }

    public display(lang: any){
        if (lang === "en"){
            return (
                <div className="education-container">
                    <div className="education-namedegree">{this.nameOfDegree.en}</div>
                    <div className="education-data">
                        <p>
                            From <span className="education-start">{this.startYear}</span> to <span className="education-end">{this.endYear}</span> at <span className="education-schoolname">{this.schoolName.en}</span>
                        </p>
                        {this.major? <p>{this.major.en}</p> : ""}
                        {this.is_succeeded? "" : <p>Interrupted</p>}
                    </div>
                </div>
            )
        } else if (lang === "fr"){
            return (
                <div className="education-container">
                    <div className="education-namedegree">{this.nameOfDegree.fr}</div>
                    <div className="education-data">
                        <p>
                            De <span className="education-start">{this.startYear}</span> à <span className="education-end">{this.endYear}</span> à <span className="education-schoolname">{this.schoolName.fr}</span>
                        </p>
                        <p>{this.major? `${this.major.fr}` : ""}</p>
                        <p>{this.is_succeeded? "" : "Interrompu"}</p>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default function Academic(){
    const language = useSelector((state: any) => state.language.value)
    const dispatch = useDispatch()

    const backToDefault = () => {
        dispatch(switchDefault())
    }

    const academic_background = [
        new Education({en: "Coding School", fr: "Coding School"}, {en: "MolenGeek", fr: "MolenGeek"}, {en: "Fullstack Web Development", fr: "Développement Web Fullstack"}, true, "Nov 2022", "Jul 2023"),
        new Education({en: "Master's of Information and Communication Science and Technology", fr: "Master en Sciences et Technologies de l'Information et de la Communication"}, {en: "Universié Libre de Bruxelles", fr: "Université Libre de Bruxelles"}, null, false, 2021, 2022),
        new Education({en: "Erasmus in Málaga", fr: "Erasmus"}, {en: "Universidad de Málaga", fr: "Universidad de Málaga"}, null, true, "Sept 2019", "Mar 2020"),
        new Education({en: "Bachelor's Degree of Translation and Interpretation", fr: "Bachelier en Traduction et Interprétation"}, {en: "Saint-Louis University Brussels", fr:"Université Saint-Louis Bruxelles"}, {en: "English-Spanish", fr: "Anglais-Espagnol"}, true, 2016, 2021),

    ]

    return (
        <section id="academic">
            <div className="ss-prev" onClick={backToDefault}>
                <FcPrevious />
            </div>
            <div className="ac-container">
                {academic_background.map(stud => stud.display(language))}
            </div>
        </section>
    )
}