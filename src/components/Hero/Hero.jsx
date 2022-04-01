import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../assets/images/heroImg.svg";

const Hero = () => {
  return (
    <div className="bg-background-bg w-full md:py-0 py-8">
      <div className="w-[90vw] m-auto flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="hero-text basis-1/2 flex flex-col md:py-16 items-left justify-center">
          <h1 className="title text-2xl md:text-4xl lg:text-5xl md:text-left text-center text-dark-gray  font-bold xl:w-3/4">
            DISCOVER AND TRACK <br />
            <span className="text-blue-primary">CONSULTANTS</span> <br />
            ACROSS THE GLOBE
          </h1>
          <h3 className="descr text-xs md:text-xl my-4 md:my-8 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <Link href="/signup">
           <a
            className="w-2/3 md:w-2/4 px-4  py-2 md:py-4 bg-blue-primary text-white uppercase text-sm md:text-md m-auto md:ml-0 text-center"
          >
            Let's get started testing stuff
          </a>
          </Link>
        </div>
        <div className="hero-img basis-1/2">
          <Image src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
