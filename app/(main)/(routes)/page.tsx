"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import React, { useState, useEffect, CSSProperties } from 'react';
import { isMobile } from 'react-device-detect';

import ParticleBackgroundAlt from '@/components/ParticleBackgroundAlt';
import HeaderComponent from "@/components/layouts/Header";

import BG01 from '@/public/bg_01.png';
import BG02 from '@/public/bg_02.png';
import BG03 from '@/public/bg_03.png';
import BG04 from '@/public/bg_04.png';

import Fantasia from '@/public/Fantasia.png';
import Nocturne from '@/public/Nocturne.png';


// 初回ロード時の画面サイズを設定値にする
let CONTENT_WIDTH = 1;
let CONTENT_HEIGHT = 1;
let HEIGHT_VALUE = 1000;
let LATEST_WIDTH = 1;

const useWindowScale = () => {
  const [scale, setScale] = useState(1);
  const [width_val, SetWidthVal] = useState(1);
  const [isCalculated, SetCalc] = useState(false);
  const [height_val, SetHeightVal] = useState(1);

  useEffect(() => {
    function handleResize() {
      const latWidth = window.innerWidth
      const latHeight = window.innerHeight
      // 拡大
      if(latWidth > CONTENT_WIDTH){
        CONTENT_WIDTH = latWidth
        SetWidthVal(latWidth)
        SetCalc(true)
      // 縮小
      }else if(latWidth < CONTENT_WIDTH){
        console.log("変動前:", HEIGHT_VALUE)
        HEIGHT_VALUE = HEIGHT_VALUE - Math.abs(LATEST_WIDTH - latWidth)*3
        SetHeightVal(HEIGHT_VALUE)
        console.log("変動後:", HEIGHT_VALUE)
      }
      LATEST_WIDTH = latWidth
      const scaleX = latWidth / CONTENT_WIDTH;
      const scaleY = latHeight / CONTENT_HEIGHT;
      // 横幅と高さの縮小比率の中で最小のものを選ぶ
      const dynamicScale = Math.min(scaleX, scaleY);

      setScale(dynamicScale);
    }

    function detectScrolled() {
      HEIGHT_VALUE = document.documentElement.scrollHeight;
      SetHeightVal(HEIGHT_VALUE)
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', detectScrolled);
    return () => {
      window.removeEventListener('reize', handleResize);
      window.removeEventListener('scroll', detectScrolled);
    };
  }, []);
  return { scale, width_val, height_val, isCalculated };
};

export default function Home() {
  const { scale, width_val, isCalculated, height_val } = useWindowScale();
  const isShow = isCalculated

  const redirectToServer = () => {
    window.location.href = "https://discord.com/invite/7cYtfF8aVY";
  };
  
  const scalingStyle: CSSProperties = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${width_val}px`,
    height: `${height_val}px`
  };

  if(!isShow) {
    return (
      <div>
        <p>ロード中...</p>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="flex-col w-full mt-12">
        <div className="text-center">スマートフォンには現在対応していません</div>
        <div className="text-center">対応までPC版をご利用ください</div>
      </div>
    )
  }

  return (
  <div style={scalingStyle} className="h-full" id="foo">
      <div className="sticky top-0 z-30">
        <HeaderComponent />
      </div>
      <div className="hidden md:visible md:block">
        <div className='relative'>
          <Image priority={true} className="w-full z-0" alt="now loading..." src={BG01}></Image>
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
      <div className="w-full h-px bg-white"></div>
      <div className='relative z-0'>
        <Image className="w-full" src={BG02} alt="NOW LOADING..."></Image>
        <div id="game" className="w-full h-full absolute top-0 bg-black opacity-60"></div>
        <div className="absolute w-full h-full top-0 mt-12 pl-12">
          <p className="font-bold text-5xl font-serif">▣GAME</p>
        </div>
        <div className="flex justify-center items-center absolute w-full h-full top-0">
          <div>
          <Card>
              <CardHeader>
                <CardTitle>——Discordだけで遊べるMMOTRPG</CardTitle>
                <CardDescription>
                  
                    Stellariaは、全く新しいMMOTRPGサーバーです。<br/>
                  その特徴は、Discordのみで完全に完結したゲームシステム。<br/>
                  Discordさえあれば、どのような場所でも気軽に遊ぶことができます。
                 
                </CardDescription>
              </CardHeader>
              <CardContent>
                
                <Button onClick={redirectToServer} className="bg-blue-700 text-white">サーバーへ参加する</Button>
              </CardContent>
          </Card>
          </div>
        </div>
      </div>
      
      <div className="bg-black" style={{height: 700}}>
        <div id="character" className="content-start pt-12 ml-12">
          <p className="font-bold text-5xl font-serif">▣CHARACTER</p>
        </div>
      </div>

      <div className='relative z-0'>
        <Image className="w-full" src={BG04} alt="NOW LOADING..."></Image>
        <div id="world" className="w-full h-full absolute top-0 bg-black opacity-60"></div>
        <div className="absolute w-full h-full top-0 mt-12 pl-12">
          <p className="font-bold text-5xl font-serif">▣WORLD</p>
          <p className="font-bold">　二つの世界——ノクターンとファンタジア</p>
        </div>
        <div className="flex justify-evenly items-center  absolute w-full h-full top-0 ">
          <div className="pr-10">
            <Card className="px-2 py-2" style={{width:300, height:350}}>
              <Image className="object-contain" alt="NOW LOADING..." src={Nocturne}></Image>
              <CardDescription className="font-bold text-white text-center text-lg mt-2">NOCTURNE</CardDescription>
            </Card>
          </div>
          <div className="pl-10">
            <Card className="px-2 py-2" style={{width:300, height:350}}>
              <Image className="object-contain" alt="NOW LOADING..." src={Fantasia}></Image>
              <CardDescription className="font-bold text-white text-center text-lg mt-2">FANTASIA</CardDescription>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-white"></div>
      <div className='relative z-0'>
        <Image className="w-full" src={BG03} alt="NOW LOADING..."></Image>
        <div id="story" className="w-full h-full absolute top-0 bg-black opacity-60"></div>
        <div className="flex justify-start absolute top-0 w-full h-full">
          <div className="content-start mt-12 ml-12">
            <p className="font-bold text-5xl font-serif">▣STORY</p>
          </div>
        </div>
      </div>
    </div>
  )
}
