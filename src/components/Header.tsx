import hero from '../assets/hero.jpg';

const Header = () => {
  return (
    <header
      className="
        relative 
        w-full 
        h-screen md:h-[400px] 
        snap-start md:snap-none
      "
    >
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay for text readability */}
      <div className="absolute inset-0 bg-[color:#0f2e3d]/80 z-10" />

      <div className="text-[color:#267298] relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl tracking-wider md:text-7xl font-bold">David Kimhi</h1>
        <p className="font-bold tracking-wide text-lg md:text-xl text-center mt-2">
          Backend-Engineer · Data · Cloud
        </p>

        <p className="text-sm uppercase md:text-sm text-center mt-3">
          Python
          <span className="mx-2">|</span>
          SQL
          <span className="mx-2">|</span>
          TypeScript
          <span className="mx-2">|</span>
          React
          <span className="mx-2">|</span>
          Node.js
        </p>
      </div>
    </header>
  );
};

export default Header;
