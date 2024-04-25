import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full p-4 bg-slate-100 h-[34rem] rounded-3xl flex pb-0">
      <div className="left flex-1 flex flex-col gap-4 justify-center px-8">
        <h1 className="uppercase font-semibold text-6xl z-10 leading-snug">
          <span className="titled">Let's</span> <br /> explore <br />{" "}
          <span className="titled-2">unique</span> <br /> clothes.
        </h1>
        <p className="">Live for influential and innovative fashion!</p>
        <Link className="btn btn-neutral max-w-fit" to={"/"}>
          Shop Now
        </Link>
      </div>
      <div className="right flex-1 hidden sm:flex">
        <img
          src="./assets/hero.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
