const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'Git', level: 85 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Sobre Mim
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Conheça mais sobre minha jornada e paixão pela tecnologia
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Minha História</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e 
              experiências digitais excepcionais. Minha jornada na programação começou com 
              curiosidade e evoluiu para uma paixão genuína por resolver problemas complexos 
              através da tecnologia.
            </p>
            <p>
              Atualmente, foco no desenvolvimento de aplicações web modernas utilizando 
              tecnologias como React, TypeScript, Node.js e outras ferramentas do 
              ecossistema JavaScript. Sempre busco me manter atualizado com as últimas 
              tendências e melhores práticas do mercado.
            </p>
            <p>
              Acredito que a tecnologia deve ser acessível e útil para todos, por isso 
              me dedico a criar interfaces intuitivas e experiências de usuário memoráveis.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Competências</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-400 text-center">Experiência & Formação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Experiência</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Desenvolvedor Full Stack</h4>
                <p className="text-gray-400 text-sm">Projetos Pessoais • 2024 - Presente</p>
                <p className="text-gray-300 mt-2">
                  Desenvolvimento de aplicações web completas utilizando React, TypeScript, 
                  Node.js e outras tecnologias modernas.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Formação</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-white">Engenharia de Computação</h4>
                <p className="text-gray-400 text-sm">SENAI CIMATEC • Em andamento</p>
                <p className="text-gray-300 mt-2">
                  Formação completa em engenharia de computação com foco em 
                  desenvolvimento de software, sistemas embarcados, inteligência 
                  artificial e arquitetura de computadores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;