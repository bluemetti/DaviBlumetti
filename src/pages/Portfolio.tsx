const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Gerador de Tickets",
      description: "Aplicação web para geração de tickets de eventos personalizados. Interface moderna e responsiva desenvolvida com React e TypeScript.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      liveUrl: "https://blumenau.codingconf2025.tech/",
      githubUrl: "https://github.com/bluemetti/Ticket-generator",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      featured: true
    },
    {
      id: 2,
      title: "Calculadora de Idade",
      description: "Aplicação web interativa para cálculo preciso de idade em anos, meses e dias. Interface moderna e intuitiva com validação de dados em tempo real.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      liveUrl: "https://agecalculator.daviblumetti.tech/",
      githubUrl: "https://github.com/bluemetti/AgeCalculatorBackend",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      featured: true
    },
    {
      id: 3,
      title: "Gerador de QR Code",
      description: "Ferramenta online para geração rápida de códigos QR personalizáveis. Suporte a diferentes tipos de conteúdo e opções de customização visual.",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["React", "TypeScript", "QR.js"],
      featured: false
    },
    {
      id: 4,
      title: "Dashboard Analítico",
      description: "Interface moderna para visualização de dados e métricas empresariais. Gráficos interativos e relatórios em tempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
      featured: false
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${project.featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Ver Projeto
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Live Demo</span>
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Código</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Meu Portfólio
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvi, cada um representando um desafio único e uma oportunidade de crescimento
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-blue-400">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.filter(p => p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 text-purple-400">Outros Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Interessado em colaborar?</h3>
          <p className="text-gray-400 mb-6">
            Estou sempre aberto a novos projetos e oportunidades interessantes.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;