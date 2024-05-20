"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';

import React, { useState, useEffect, CSSProperties } from 'react';

import ParticleBackground from '@/components/ParticleBackground';
import ParticleBackgroundAlt from '@/components/ParticleBackgroundAlt';
import HeaderComponent from "@/components/layouts/Header";

// 初回ロード時の画面サイズを設定値にする
let CONTENT_WIDTH = 1;
let CONTENT_HEIGHT = 1;

const useWindowScale = () => {
  const [scale, setScale] = useState(1);
  const [width_val, SetWidthVal] = useState(1);
  const [height_val, SetHeightVal] = useState(1);
  const [isCalculated, SetCalc] = useState(false);
 
  useEffect(() => {
    function handleResize() {
      const latWidth = window.innerWidth
      const latHeight = window.innerHeight

      if(latWidth > CONTENT_WIDTH){
        CONTENT_WIDTH = latWidth
        CONTENT_HEIGHT = latHeight
        SetWidthVal(latWidth)
        SetHeightVal(latHeight)
        SetCalc(true)
      }
       
      const scaleX = latWidth / CONTENT_WIDTH;
      const scaleY = latHeight / CONTENT_HEIGHT;
      // 横幅と高さの縮小比率の中で最小のものを選ぶ
      const dynamicScale = Math.min(scaleX, scaleY);

      setScale(dynamicScale);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('reize', handleResize);
    };
  }, []);
  return { scale, width_val, height_val, isCalculated };
};

export default function Home() {
  const { scale, width_val, height_val, isCalculated } = useWindowScale();
  const isShow = isCalculated
  
  const style: CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${width_val}px`,
    height: `${height_val}px`
  };
  if (!isShow) {
    return (
      <div>ロード中...</div>
    )
  }
  return (
    <div style={style}>
      <div className="sticky top-0 z-20">
        <HeaderComponent />
      </div>
      {/* PC */}
      <div className="hidden md:visible md:block">
        <div className='relative'>
          <img className="w-full z-0" src="/bg_01.png"></img>
          <div className="absolute top-0 w-full h-full">
            <ParticleBackgroundAlt></ParticleBackgroundAlt>
          </div>
          <div className=' flex justify-end w-full h-full absolute top-0'>
            <div className=' content-center text-4xl'>
              <p className="bg-black px-2 z-10">——それは、二つの星を舞台にした年代記。</p>
            </div>
          </div>
        </div>
      </div>
      {/* スマートフォン */}
      <div className="md:hidden">
        <div>
          <img className="w-full" src="/Pic1.png"></img>
          <div className="absolute top-0 w-full h-full">
           <ParticleBackground></ParticleBackground>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-white"></div>
      {/* PC */}
      <div className='relative'>
        <img className="w-full z-0" src="/bg_02.png"></img>
        <div className="w-full h-full absolute top-0 bg-black opacity-60"></div>
        <div className="flex justify-center absolute top-0 w-full h-full">
          <div className="content-center">
            <p className="font-bold text-xl">GAME</p>
          </div>
        </div>
      </div>
    </div>
  )
}
