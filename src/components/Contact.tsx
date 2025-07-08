const Contact = () => {
    return (
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              📧 Email:{' '}
              <a href="mailto:david@example.com" className="text-blue-500 hover:underline">
                david@example.com
              </a>
            </li>
            <li>
              💼 LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/david-kimhi"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/david-kimhi
              </a>
            </li>
            <li>
              🧑‍💻 GitHub:{' '}
              <a
                href="https://github.com/David-Kimhi"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                github.com/David-Kimhi
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Contact;
  