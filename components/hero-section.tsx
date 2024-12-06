"use client";

import { useEffect, useRef } from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.pageYOffset;
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/3741314/pexels-photo-3741314.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="relative z-10 h-full flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-white via-white to-gray-300
            animate-text-shimmer">
            Créez la cuisine de vos rêves avec Perfect Design
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto 
            opacity-0 animate-delay-300 animate-fade-in-up">
            Architecte d'intérieur spécialisé dans la conception de cuisines 
            modernes, fonctionnelles, et esthétiques
          </p>
          
          <div className="animate-delay-600 animate-fade-in-up">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 
                bg-white text-black 
                px-8 py-4 rounded-full 
                font-semibold 
                hover:bg-gray-100 
                transition-all duration-300 
                transform hover:scale-105 
                hover:shadow-lg 
                group"
            >
              Découvrez nos réalisations
              <ArrowRight 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}