"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import P1 from "~/assets/images/p1.webp";
import P2 from "~/assets/images/p2.webp";
import P3 from "~/assets/images/p3.webp";

export default function Home() {
  const section0 = useRef<HTMLDivElement>(null);
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const section3 = useRef<HTMLDivElement>(null);
  const section4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      function getScrolledPercentage(
        section1Rect: DOMRect,
        section2Rect: DOMRect,
        duration: number = 100
      ) {
        const percentage =
          ((section1Rect.height - (section2Rect.top - section1Rect.top)) /
            section1Rect.height) *
          duration;
        const clampedPercentage = Math.max(0, Math.min(200, percentage));
        return clampedPercentage;
      }

      const anime = (await import("animejs/lib/anime.es.js")).default;

      const scaleDownSection0 = anime({
        targets: "#hero",
        scale: 0.4,
        easing: "easeInOutSine",
        autoplay: false,
        duration: 400,
      });

      const translate = anime({
        targets: '#hero-1',
        translateY: '-100%',
        autoplay: false,
        duration:400
      })

      const scaleDownSection1 = anime({
        targets: "#section1",
        scale: 0.1,
        easing: "easeInOutSine",
        autoplay: false,
        duration: 400,
      });

      const scaleDownSection2 = anime({
        targets: "#section2",
        scale: 0.1,
        easing: "easeInOutSine",
        autoplay: false,
        duration: 400,
      });

      window.onscroll = function () {
        let Section0Rect = section0.current!.getBoundingClientRect();
        let Section1Rect = section1.current!.getBoundingClientRect();
        let Section2Rect = section2.current!.getBoundingClientRect();
        let Section3Rect = section3.current!.getBoundingClientRect();
        let Section4Rect = section4.current!.getBoundingClientRect();

        
        scaleDownSection0.seek(
          getScrolledPercentage(Section0Rect, Section4Rect)
        );
        translate.seek(getScrolledPercentage(Section0Rect, Section4Rect, 24));
        scaleDownSection1.seek(
          getScrolledPercentage(Section1Rect, Section2Rect)
        );
        scaleDownSection2.seek(
          getScrolledPercentage(Section2Rect, Section3Rect)
        );
      };
    })();
  }, []);

  return (
    <>
      <div className="min-h-[300vh] h-screen flex flex-col gap-56">
        <div className="flex flex-col flex-wrap h-screen overflow-hidden sticky top-0 w-full justify-start content-center flex-none">
          <div
            className="flex-nowrap items-center sticky top-0 bg-neutral-200 overflow-hidden justify-between flex-col h-screen max-w-full w-full z-10"
            id="hero"
            ref={section0}
          >
            <div className="h-full flex items-center justify-center">
              <div className="flex text-[320px] leading-[0.8em] tracking-tighter flex-col items-center justify-start h-[260px] overflow-hidden">
                <div className="h-min w-full flex flex-col items-center justify-center" id='hero-1'>
                  <div>AYUSH</div>
                  <div>IS</div>
                  <div>LEGEND</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none h-full left-0 absolute top-0 w-full bg-neutral-950 text-neutral-50">
            <div className="flex gap-8 w-full h-full">
              <div className="text-[320px] w-full leading-[0.8em] tracking-tighter relative flex flex-col overflow-y-hidden">
                <div className="flex font-medium gap-4 overflow-hidden place-items-center w-full justify-center items-center">
                  <div className="flex-[1_0_0] flex flex-col">
                    <div className="flex-[1_0_0] animate-marquee">
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                    </div>
                    <div className="flex-[1_0_0] animate-marquee">
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] flex flex-col">
                    <div className="flex-[1_0_0] animate-marquee2">
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                    </div>
                    <div className="flex-[1_0_0] animate-marquee2">
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                      <h1>CUBO</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-56 h-screen" ref={section4}></div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="h-min max-w-[1480px] w-full px-8 flex justify-center items-center flex-col">
          <div
            className="h-screen sticky w-full top-0"
            ref={section1}
            id="section1"
          >
            <div className="h-[500px] sm:h-[90%] absolute left-[calc(50.00000000000002%_-_100%/2)] top-[calc(50.00000000000002%_-_90%/2)] w-full">
              <Image
                src={P1}
                alt="beach"
                className="rounded-2xl h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div
            className="h-screen sticky w-full top-0"
            ref={section2}
            id="section2"
          >
            <div className="h-[500px] sm:h-[90%] absolute left-[calc(50.00000000000002%_-_100%/2)] top-[calc(50.00000000000002%_-_90%/2)] w-full">
              <Image
                src={P2}
                alt="beach"
                className="rounded-2xl h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div
            className="h-screen sticky w-full top-0"
            ref={section3}
            id="section3"
          >
            <div className="h-[500px] sm:h-[90%] absolute left-[calc(50.00000000000002%_-_100%/2)] top-[calc(50.00000000000002%_-_90%/2)] w-full">
              <Image
                src={P3}
                alt="beach"
                className="rounded-2xl h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen" id="section4" ref={section4}></div> */}
    </>
  );
}
