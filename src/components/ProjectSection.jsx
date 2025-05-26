import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
        id:1,
        title: "Movie App",
        description: "A movie app that allows users to search for movies and view details.",
        image: "/projects/Screenshot 2025-05-22 171333.png",
        link: "",
        github: "",
        tags: ["React", "JavaScript", "CSS"],
    },
    {
        id:2,
        title: "Weather App",
        description: "A weather app that provides current weather information for any location.",
        image:"/projects/image.png",
        link: "",
        github: "",
        tags: ["HTML", "JavaScript", "CSS"],
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="conainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. I have worked on a variety of projects, from web applications to mobile apps. Each project has its own unique features and challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow=hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transistion-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 font-medium border rounded-full bg-primary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a className="text-foreground/80 hover:text-primary transistion-colors duration-300" href="{project.link}" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20}/>
                                    </a>

                                    <a className="text-foreground/80 hover:text-primary transistion-colors duration-300" href="{project.github} " target="_blank" rel="noopener noreferrer">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex itmes-center mx-auto gap-2" href="#" target="_blank">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )

}
