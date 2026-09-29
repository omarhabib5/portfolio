const skillGroups = [
    { category: "Frontend", items: ["React", "Angular", "JavaScript", "HTML/CSS"] },
    { category: "Backend", items: [ ".NET", "Express"] },
    { category: "Database", items: ["MongoDB", "SQL Server"] },
    { category: "Workflow", items: ["Git basics"] },
]

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="section-heading"><p className="eyebrow">MY TOOLKIT</p><h2>Built for the<br /><em>whole picture.</em></h2></div>
            <div className="skills-grid">
                {skillGroups.map((group, index) => (
                    <div className="skill-group" key={index}>
                        <h3>{group.category}</h3>
                        <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills