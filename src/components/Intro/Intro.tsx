import "./Intro.sass"
import { useSelector } from "react-redux"

export default function Intro(){
    const language = useSelector((state: any) => state.language.value)
    const content = {
        fr: {
            title: "A propos d'Anthony",
            subtitle: "Développeur Web Passionné",
            introduction: "Salut! Je suis Anthony, j'ai 27 ans et je suis un Développeur Web Fullstack dynamique et motivé.",
            paragraphs: [
                {
                    cat: "Parcours Académique",
                    paragraph: "Je suis titulaire d'un bachelier en Traduction et Interprétation, qui m'a permis de développer de solides bases linguistiques et en communication. J'ai par la suite entamé un master en Sciences et Technologies de l'Information et de la Communication. Mais après une année, j'ai pris la décision de réorienter mon attention sur ma nouvelle passion."
                },
                {
                    cat: "Passion pour le Développement Web",
                    paragraph: "Mon parcours et ma vie ont pris un tournant encore plus excitant lorsque je me suis découvert une forte affinité avec le Développement Web pendant de la dernière année de mon bachelier. Cet événement m'a permis de me rendre compte que je n'étais pas sur la bonne voie et m'a mené à <b>MolenGeek</b> où j'ai pu en apprendre davantage sur le Developpement Web."
                },
                {
                    cat: "Au-delà du code",
                    paragraph: "Quand je ne suis pas sur Visual Code Studio, j'aime le basketball et le beatmaking."
                }
            ]
        },
        en: {
            title: "About Anthony",
            subtitle: "Passionate Web Developer",
            introduction: "Hello! I'm Anthony, a 27-year-old dynamic and highly motivated Fullstack Web Developer",
            paragraphs: [
                {
                    cat: "Academic Background",
                    paragraph: "I hold a Bachelor's degree in Translation and Interpretation, which honed my linguistic and communicative abilities. Although I initially pursued a Master's degree in Information and Communication Science and Technology, I decided to redirect my focus due to my newfound passion."
                },
                {
                    cat: "Passion for Web Development",
                    paragraph: "My journey took an exciting turn when I discovered an innate affinity for programming during my final year of my bachelor's degree. This revelation led me to explore the world of web development, where I found my true calling. Driven by curiosity and a hunger for learning, I embarked on a path of self-discovery in programming."
                },
                {
                    cat: "Beyond Coding",
                    paragraph: "When I'm not coding, you can find me either on the basketball court or making music behind my synth feel free to have a look at my SoundCloud."
                }
            ]
        }
    }

    const paragraphs_mapped_en = content.en.paragraphs.map((element) => {
        return (
            <div className="i-cat" key={element.cat}>
                <p className="i-head">{element.cat}</p>
                <p>{element.paragraph}</p>
            </div>
        )
    }) 
    const paragraphs_mapped_fr = content.fr.paragraphs.map((element) => {
        return (
            <div className="i-cat" key={element.cat}>
                <div className="i-head">{element.cat}</div>
                <p>{element.paragraph}</p>
            </div>
        )
    }) 

    return (
        <section id="intro">
            <h2>{language==="en"? content.en.title.toUpperCase() : content.fr.title.toUpperCase()}</h2>
            <h4>{language==="en"? content.en.subtitle.toUpperCase() : content.fr.subtitle.toUpperCase() }</h4>

            <p>{language==="en"? content.en.introduction : content.fr.introduction}</p>

            <>
                {language==="en"? paragraphs_mapped_en : paragraphs_mapped_fr}
            </>
        </section>
    )
}