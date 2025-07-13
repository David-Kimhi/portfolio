const projects = [
    {
      title: 'Sports Scheduler',
      description:
        'A full-stack web app that lets users subscribe to sports game schedules via .ics or Google Calendar. Built with React, TypeScript, Node.js, and MongoDB.',
      link: 'https://github.com/David-Kimhi/sport-scheduler-be',
    },
    {
      title: 'Genetic Algorithm',
      description:
        'A unique algorithm for finding the shortest path in a graph (academic project)',
      link: 'https://github.com/David-Kimhi/genetic_algorithm', // Replace or update later
    },
    {
      title: 'Google Photos to iCloud Transfer Tool',
      description:
        'A tool that helps you move your photos from Google Photos to iCloud easily',
      link: 'https://github.com/David-Kimhi/g_photos_handling',
    },
    {
        title: 'Age & Gender Detection',
        description:
          'An AI model to detect the age and gender of a person from face images (academic project)',
        link: 'https://github.com/David-Kimhi/Data-Science-Workshop',
    },
    {
        title: 'Meta\'s Coding Puzzles',
        description:
          'My solutions for Meta\'s coding puzzles',
        link: 'https://github.com/David-Kimhi/meta-coding-puzzles',
    },

  ];
  
  const Projects = () => {
    return (
      <section
        className="
          bg-[color:#bed5e0] 
          py-16 md:py-16 
          px-6 md:px-10 lg:px-20 
          h-screen md:h-auto 
          snap-start md:snap-none 
          flex items-center
        "
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl tracking-wider md:text-3xl font-semibold text-[color:#267298] mb-6 text-center [font-family:'Dancing_Script',cursive]">
            Projects
          </h2>
  
          <div className="overflow-x-auto">
            <div className="flex gap-6 md:gap-8 w-max px-1">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-[70vw] md:w-[40vw] lg:w-[20vw] bg-[color:#e9f1f5] shadow-md rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-[color:#113243] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-[color:#3bb2ed] hover:underline"
                    >
                      View project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };  
  
  export default Projects;
  