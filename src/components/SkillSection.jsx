import { useState } from "react";

const skills = [
  { "name": "HTML5", "level": "90", "category": "frontend" },
  { "name": "CSS3", "level": "85", "category": "frontend" },
  { "name": "JavaScript", "level": "85", "category": "frontend" },
  { "name": "React JS", "level": "80", "category": "frontend" },

  { "name": "Node.js", "level": "80", "category": "backend" },
  { "name": "REST API", "level": "80", "category": "backend" },

  { "name": "Git", "level": "85", "category": "tool" },
  { "name": "GitHub", "level": "85", "category": "tool" },
  { "name": "Postman", "level": "80", "category": "tool" },
  { "name": "Visual Studio Code", "level": "90", "category": "tool" },

  { "name": "Data Structures", "level": "85", "category": "concept" },
  { "name": "Algorithms", "level": "85", "category": "concept" },
  { "name": "Object-Oriented Programming", "level": "80", "category": "concept" },

  { "name": "Problem Solving", "level": "90", "category": "soft-skill" },
  { "name": "Effective Communication", "level": "85", "category": "soft-skill" },
  { "name": "Leadership", "level": "85", "category": "soft-skill" }
];

const categories = [
  { "name": "All", "value": "all" },
  { "name": "Frontend", "value": "frontend" },
  { "name": "Backend", "value": "backend" },
  { "name": "Tools", "value": "tool" },
  { "name": "Concepts", "value": "concept" },
  { "name": "Soft Skills", "value": "soft-skill" }
];

export const SkillSection = () => {
    const [activeCategory,setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skills)=> activeCategory === "all" || skills.category === activeCategory)

    return(
        <section className="py-24 px-4 relative bg-secondary/30" id="skills">
            <div className="container mx-auto max-w-5xl"> 
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center mb-12 text-center">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            className={`px-4 py-2 rounded-full transistion-colors duration-300 capitalize ${activeCategory === category.value ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 hover:bg-secondary text-foreground'}`}
                            onClick={() => setActiveCategory(category.value)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className="bg-card shadow-xs rounded-lg card-hover p-6">
                            
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {skill.name}
                                </h3>
                            </div>   
                            <div className="w-full bg-secondary/50 h-2 rounded-full oveflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"/>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div> 


                        </div>
                    ))}
                </div>

            </div>
        </section>
    )

}