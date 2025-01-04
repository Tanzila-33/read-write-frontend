import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://picsum.photos/1000/1500)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          Write your mind
        </h1>
        <p className="text-xl mb-8 text-gray-100">
          Share your stories, ideas, and perspectives with readers worldwide
        </p>
        <Button 
          size="lg"
          className="transform hover:scale-105 transition-transform"
        >
          Start Writing Today
        </Button>
      </div>
    </div>
  );
}