import "./Portfolio.sass"
import sutom from '../../img/sutom.png'


class Project{
    public name: string
    public tech: string[]
    public imgPath: string
    public url: string

    public constructor(name: string, tech: string[], imgPath: string, url: string){
        this.name = name
        this.tech = tech
        this.imgPath = imgPath
        this.url = url
    }

    public techDisplay(){
        const techMapped = this.tech.map((item, i) => {
            return(
                <span key={item}>{item}{i === this.tech.length-1? "" : ","}</span>
            )
        })
        return(
            <span className="tech-list">{techMapped}</span>
        )
    }

    public display(){
        return(
            <a href={this.url} target="_blank" rel="noreferrer" className="project">
                <p>{this.name} ({this.techDisplay()})</p>
                <div>
                    <img className="project-img" src={this.imgPath} alt="" />
                </div>
            </a>
        )
    }
}

export default function Portfolio(){
    const projects = [
        new Project("Sutom", ["HTML", "CSS", "JS"], sutom, "https://github.com/anthonysuperstar/sutom")
    ]

    const projects_map = projects.map((project) => {
        return project.display()
    })
    return (
        <section id="portfolio">
            {projects_map}
        </section>
    )
}