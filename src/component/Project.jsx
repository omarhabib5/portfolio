const projects = [
  {
    number: "01",
    title: "Project & ticket management",
    description: "A complete workspace for teams to plan projects, track tasks, and resolve support tickets without losing context.",
    outcome: "A single source of truth for delivery teams.",
    stack: ["Angular", ".NET", "SQL Server"],
    github: "", // add your repo link
    demo: "", // add live link if deployed
  },
  {
    number: "02",
    title: "Personal finance, made clear",
    description: "A focused finance app that helps people understand their money through simple tracking, budgets, and useful visual feedback.",
    outcome: "Less spreadsheet friction. More financial clarity.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "",
    demo: "",
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading project-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Proof, not<br /><em>promises.</em></h2></div><span className="section-note">A few problems I’ve enjoyed<br />solving from end to end.</span></div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-number">{project.number}</div><div className="project-content"><h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-outcome"><span>↳</span> {project.outcome}</p>
            <div className="tech-badges">
              {project.stack.map((tech, i) => (
                <span className="badge" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects