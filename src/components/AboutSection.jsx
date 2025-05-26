import { Briefcase, Code, PersonStanding, SquareArrowDownLeft } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                    <p className="text-muted-foreground">
                        I am a passionate software engineer with a focus on web development 
                        and a love for creating innovative solutions. 
                        I am always eager to learn and grow in my field 
                        , and I am excited to share my journey with you.
                    </p>

                    <p className="text-muted-foreground">
                        I have a strong foundation in computer science and a deep understanding of web technologies, including HTML, CSS, JavaScript, and various frameworks.
                        I enjoy working on challenging projects that push my limits and allow me to explore new technologies.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Contact
                        </a>

                        <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transistion-colors duration-300" href="">
                            Download Resume
                        </a>
                    </div>

                </div>
                 <div className="grid gird-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                        <h3 className="text-lg font-semibold">Web Development</h3>
                                        <p className="text-muted-foreground">I create responsive and user-friendly websites.</p>
                                    </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <SquareArrowDownLeft className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                        <h3 className="text-lg font-semibold">Open Source</h3>
                                        <p className="text-muted-foreground">I love contributing to open source projects.</p>
                                    </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                        <h3 className="text-lg font-semibold">Work Experience</h3>
                                        <p className="text-muted-foreground">I have worked on various projects in different domains.</p>
                                    </div>
                            </div>
                        </div>

                    </div>

            </div>







            </div>

           

        </section>
    )

}