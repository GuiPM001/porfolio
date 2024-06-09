import LinkList from "components/LinkList";

const Home = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row items-center xl:items-start justify-center xl:justify-between animate-fadeIn">
      <div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2 pt-0 lg:pt-28">
        <p className="text-4xl lg:text-6xl lg:text-nowrap text-gray-800 font-bold">
          Hi, I'm <span className="text-sky-600">Guilherme</span> 👋🏻
        </p>
        <p className="text-xl lg:text-2xl text-gray-500">
          I'm a fullstack developer passionate about technology, innovation and
          design enthusiast.
        </p>

        <LinkList />
      </div>

      <img
        src={require("assets/images/illustration.png")}
        className="lg:w-1/2 mt-6 lg:m-0 animate-wiggle"
        alt="Astronaut illustration"
      />
    </div>
  );
};

export default Home;
