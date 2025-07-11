const skillGroups = {
    'Languages & Frameworks:': ['Python', 'PySpark', 'Pandas', 'Scikit-Learn', 'TypeScript', 'SQL', 'Node.js', 'React'],
    'Backend & Data Engineering:': ['ETL', 'APIs', 'MongoDB', 'Docker', 'VPS'],
    'Azure Cloud:': [
      'Azure Data Factory',
      'Azure Databricks',
      'Azure Function App',
      'Azure Storage',
      'Azure Logic Apps',
    ],
  };
  
  const Skills = () => {
    return (
      <section className="bg-[color:#e9f1f5] py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[color:#267298] mb-8">
            Skills
          </h2>
  
          <ul className="flex flex-wrap justify-center gap-3">
            {Object.entries(skillGroups).flatMap(([groupName, skills]) => [
              <li
                key={`label-${groupName}`}
                className="px-5 py-3 bg-[color:#267298] text-white text-xs md:text-sm rounded-full shadow-sm font-medium"
              >
                {groupName}
              </li>,
              ...skills.map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-white text-[color:#267298] text-sm md:text-base rounded-full shadow-sm border border-[color:#267298] hover:bg-[color:#267298] hover:text-white transition"
                >
                  {skill}
                </li>
              )),
            ])}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Skills;
  