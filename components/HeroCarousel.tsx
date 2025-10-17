'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { VyshyvankaPattern } from "@/components/VyshyvankaPattern";

const carouselImages = [
  {
    url: "/slide1.jpg",
    alt: "Enfants ukrainiens en classe"
  },
  {
    url: "/slide2.jpg",
    alt: "Apprentissage culturel"
  },
  {
    url: "/slide3.jpg",
    alt: "École et éducation"
  }
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <div className="relative h-[464px] md:h-[605px] overflow-hidden rounded-lg shadow-lg">
      {/* Images */}
      <div className="relative h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-black"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-black"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Contenu overlay avec motifs décoratifs */}
      <div className="absolute inset-0 flex items-end justify-center text-center text-white px-6">
        <VyshyvankaPattern position="top-left" size="lg" className="opacity-10" />
        <VyshyvankaPattern position="top-right" size="lg" className="opacity-10" />
        <VyshyvankaPattern position="bottom-left" size="lg" className="opacity-10" />
        <VyshyvankaPattern position="bottom-right" size="lg" className="opacity-10" />
        
        <div className="max-w-4xl relative z-10">
          <div className="mb-6 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20" style={{ background: 'linear-gradient(to bottom, rgba(0, 87, 183, 0.7) 50%, rgba(255, 215, 0, 0.7) 50%)' }}>
            <h1 className="mb-4 text-white text-shadow-lg">
              Bienvenue à l&apos;école ukrainienne de Saint-Nicolas
            </h1>
            <h3 className="text-white max-w-2xl mx-auto text-shadow">
              L&apos;endroit où les enfants ukrainiens se réunissent chaque samedi pour apprendre leur culture d&apos;origine
            </h3>
            
            {/* Décoration en bas */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-12 h-0.5 bg-blue-300"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-12 h-0.5 bg-blue-300"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
