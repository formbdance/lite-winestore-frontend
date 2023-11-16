import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import CSSPlugin from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

export const Header = () => {
  const blockRefs = {
    lefthead: useRef(),
    righthead: useRef(),
  };

  function animatedMe() {
    gsap.fromTo(
      "#lefthead",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.25,
        transition: 0.2,
      }
    );
    gsap.fromTo(
      "#righthead",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.25,
        transition: 0.2,
      }
    );
  }

  useEffect(() => {
    animatedMe();
  }, []);

  return (
    <section className="font-Catallina uppercase">
      <div className="container mx-auto flex px-4 xl:px-40 py-24 md:flex-row flex-col items-center ">
        <div
          id="lefthead"
          ref={blockRefs.lefthead}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative bg-aqua-400"
        >
          <div className="w-3/4 h-3/4 -rotate-30 absolute -translate-x-2/4">
            <img src={require("./img/onion.png")} alt="" className="" />
          </div>
          <img
            className="object-cover object-center rounded-full relative z-10"
            alt="hero"
            src={require("./img/5f39a9cd7cf13ff481f3.png")}
          />
        </div>
        <div
          id="righthead"
          ref={blockRefs.righthead}
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500 font-semibold">
            <blockquote>
              {" "}
              Amar hasta el último aliento,
              <br />
              hasta la última gota de vino.
            </blockquote>
          </h1>
          <div className="mb-2 leading-relaxed text-gray-600 ">
            <p>
              The wines of the best producing countries are already waiting for
              you on our shelves
            </p>
          </div>

          <div className="flex justify-center text-gray-500 text-xs">
            <p>Wine of story</p>
          </div>
        </div>
      </div>
    </section>
  );
};
