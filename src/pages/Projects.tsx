import Card from '../components/Card'

const Projects = () => {  const project = {
    id: 1,
    title: 'Skygate',
    description: 'This is the project you\'re on right now! My personal portfolio, shooting for the stars with a super dark, minimalist vibe.',
    image: '', // No placeholder image
    link: 'https://github.com/EliasL-git/skygate',
    tech: ['React', 'TypeScript', 'Vite', 'CSS']
  }

  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>My Project</h1>
        <p>Here&apos;s what I&apos;ve been working on lately.</p>
      </section>

      <section className="projects-grid">
        <Card 
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          className="project-card"
        >
          <div className="tech-stack">
            {project.tech.map((tech) => (
              <span key={tech} className="tech">{tech}</span>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Projects
