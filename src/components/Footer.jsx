import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-12 px-4bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center bg-card ">
            <div className="container mx-auto text-start">
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Akella Srinivas. All rights reserved.</p>
                <p className="text-sm text-muted-foreground">Built with React and Tailwind CSS</p>

                <a className="pt-10 items-center justify-center" href="#home">
                    <ArrowUp  className="left-1/2 size-10 p-2 rounded-full bg-primary/10 hover:primary/20 text-primary transistion:colors duration:300"/>
                </a>
            </div>
        </footer>
    )
}