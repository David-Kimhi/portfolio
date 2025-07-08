const Skills = () => {
    const skills = ['Python', 'TypeScript', 'Node.js', 'React', 'MongoDB', 'Azure', 'SQL', 'ETL', 'APIs'];
  
    return (
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 border border-gray-400 rounded-lg text-sm bg-white shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Skills;
  