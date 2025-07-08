import hero from '../assets/hero.jpg';

const Header = () => {
  return (
    <header className="relative w-full h-[400px]">
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional: dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">David Kimhi</h1>
        <p className="mt-2 text-lg md:text-xl">
          Software-Oriented Engineer · Backend · Data · Cloud · React
        </p>
      </div>
    </header>
  );
};

export default Header;
