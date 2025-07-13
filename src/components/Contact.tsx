const Contact = () => {
  return (
    <section
      className="
        bg-gray 
        px-6 md:px-10 lg:px-20 
        py-16 md:py-16 
        h-screen md:h-auto 
        snap-start md:snap-none 
        flex items-center
      "
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[color:#267298] mb-8">
          Contact
        </h2>

        <div className="space-y-4 text-[color:#267298] text-base md:text-lg">
          <p>
            Email:{' '}
            <a
              href="mailto:radakdk@gmail.com"
              className="underline hover:text-[color:#c48074] transition"
            >
              radakdk@gmail.com
            </a>
          </p>

          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/david-kimhi"
              className="underline hover:text-[color:#c48074] transition"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/david-kimhi
            </a>
          </p>

          <p>
            GitHub:{' '}
            <a
              href="https://github.com/David-Kimhi"
              className="underline hover:text-[color:#c48074] transition"
              target="_blank"
              rel="noreferrer"
            >
              github.com/David-Kimhi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
