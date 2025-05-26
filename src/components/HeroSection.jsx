import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative flex flex-col itmes-center justify-center min-h-screen px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
               <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in hover:animate-fade-in">Hi I'm </span>
                        <span className="opacity-0 animate-fade-in-delay-1 text-primary">Akella </span>
                        <span className="opacity-0 animate-fade-in-delay-2 text-gradient ml-2">Srinivas</span>
                    </h1>


                    <p className="text-lg md:text-xl max-2-2xl text-muted-foreground opacity-0 animate-fade-in-delay-3 ">
                            I am a passionate software engineer with a focus on web development and a love for creating innovative solutions.
                            I am always eager to learn and grow in my field, and I am excited to share my journey with you.
                    </p>

               </div>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a className="cosmic-button" href="#projects">
                        View My Work
                    </a>
                </div>

                <div className="absolute bottom-8 left-1/2 right-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce" >
                    <span className="text-sm text-muted-foreground mb-2" >Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>

            </div>


        </section>
    )

}
