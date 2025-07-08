const Projects = () => {
    return (
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">📅 Sports Scheduler</h3>
            <p className="text-gray-700 mb-3">
              A full-stack web app that lets users subscribe to sports game schedules
              via .ics or Google Calendar integration. Built with React, Node.js,
              TypeScript, MongoDB, and sports API integration.
            </p>
            <a
              href="https://github.com/David-Kimhi/sports-scheduler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Code on GitHub
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  