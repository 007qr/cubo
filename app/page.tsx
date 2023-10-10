"use client";
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import P1 from '~/assets/images/p1.webp';
import P2 from '~/assets/images/p2.webp';
import P3 from '~/assets/images/p3.webp';

export default function Home() {
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const section3 = useRef<HTMLDivElement>(null);

  useEffect(() => {

    (async () => {

      const calculateScrollPercentage = (rect: DOMRect) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementRect = rect;
        const percentage = ((scrollTop - elementRect.top) / elementRect.height) * 100;
        const clampedPercentage = Math.max(0, Math.min(100, percentage));
        
        return clampedPercentage
      };

      const anime = (await import("animejs/lib/anime.es.js")).default;

      const scaleDownSection1 = anime({
        targets: '#section1',
        scale: 0.5,
        easing: 'easeInOutSine',
        autoplay: false,
        duration: 400
      })

      const scaleDownSection2 = anime({
        targets: '#section2',
        scale: 0.5,
        easing: 'easeInOutSine',
        autoplay: false,
        duration: 400
      })

      const scaleDownSection3 = anime({
        targets: '#section3',
        scale: 0.5,
        easing: 'easeInOutSine',
        autoplay: false,
        duration: 400
      })

      window.onscroll = function () {
        scaleDownSection1.seek(calculateScrollPercentage(section1.current!.getBoundingClientRect()))
        scaleDownSection2.seek(calculateScrollPercentage(section3.current!.getBoundingClientRect()))
      }

    })()

  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className='h-min max-w-[1480px] w-full px-8 flex justify-center items-center flex-col'>
            <div className="h-screen sticky w-full top-0" ref={section1} id='section1'>
              <div className='h-[90%] absolute left-[calc(50.00000000000002%_-_100%/2)] top-[calc(50.00000000000002%_-_90%/2)] w-full'>
                <Image src={P1} alt='beach' className='rounded-2xl h-full w-full object-cover object-center' />
              </div>
            </div>
            <div className="h-screen sticky w-full top-0" ref={section2} id='section2'>
              <div className='h-[90%] absolute left-[calc(50.00000000000002%_-_100%/2)] top-[calc(50.00000000000002%_-_90%/2)] w-full'>
                <Image src={P2} alt='beach' className='rounded-2xl h-full w-full object-cover object-center' />
              </div>
            </div>
            <div className="h-screen sticky w-full top-0" ref={section3} id='section3'>
              <div className='h-[90%] absolute left-[calc(50.00000000000002%_-_100%/2)] top-[calc(50.00000000000002%_-_90%/2)] w-full'>
                <Image src={P3} alt='beach' className='rounded-2xl h-full w-full object-cover object-center' />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
