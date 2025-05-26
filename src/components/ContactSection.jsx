import { InstagramIcon, Linkedin, Locate, LocateIcon, Mail, MapPin, Phone, Send, TwitchIcon, TwitterIcon, Youtube } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"

export const ContactSection = () => {




    const {toast} = useToast()

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitted(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I will get back to you soon.",
            });
            setIsSubmitted(false);
        },1500)

    }


    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact <span className="text-primary">Me</span></h2>

                 <p className="text-center text-muted-foreground mb-12 mx-auto max-w-2xl">
                I am always open to new opportunities and collaborations. 
                If you have any questions or would like to get in touch, feel free to reach out to me through the links below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8 pt-4">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <a href="mailto:alsrinivas.346@gmail.com" className="text-foreground hover:text-primary transition-colors duration-300">
                                    alsrinivas.346@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Phone Number</h4>
                                <a href="tel:7854860899" className="text-foreground hover:text-primary transition-colors duration-300">
                                    7854860899
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <a className="text-foreground hover:text-primary transition-colors duration-300">
                                    India
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With ME</h4>
                        <div className="flex justify-center space-x-4 text-muted-foreground">    
                            <a>
                                <InstagramIcon/>
                            </a>
                            <a>
                                <Linkedin/>
                            </a>
                            <a>
                                <TwitterIcon/>
                            </a>
                            <a>
                                <Youtube/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-4 rounded-lg shadow-xs">  
                     <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/10 bg-background text-foreground"
                                placeholder="Enter your name"
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/10 bg-background text-foreground"
                                placeholder="@gmail.com"
                            ></input>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-3 pb-5 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/10 bg-background text-foreground resize-none"
                                placeholder="Hey I'd like to discuss..."
                                textarea="true"
                            ></input>
                        </div>

                        <button type="submit" disabled={isSubmitted} className="cosmic-button w-full flex items-center justify-center gap-2 ">{isSubmitted?"Sent!!":"Send Message"} <Send/></button>

                    </form>

                </div>
            </div>
        </div>
    </section>
    )
}