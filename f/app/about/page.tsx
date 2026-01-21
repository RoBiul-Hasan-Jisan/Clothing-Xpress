"use client";

import React, { useEffect, useRef, useState } from 'react';
import themeColors from '../component/themeColors/themeColor';
import { useRouter } from 'next/navigation';

const About = () => {
  const theme = themeColors.dark;
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      number: "01",
      title: "Premium Quality",
      description: "Crafted from the finest fabrics for unparalleled comfort and long-lasting durability.",
      detail: "280 GSM Cotton Blend"
    },
    {
      number: "02",
      title: "Trendy Designs",
      description: "Urban streetwear aesthetics that keep you ahead of the fashion curve.",
      detail: "Limited Edition Drops"
    },
    {
      number: "03",
      title: "Unisex Style",
      description: "Inclusive designs for everyone who loves authentic streetwear culture.",
      detail: "Sizes XS - 3XL"
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Clash+Display:wght@400;500;600;700&family=Cabinet+Grotesk:wght@400;500;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .hero-section {
          position: relative;
          background: ${theme.background};
          overflow: hidden;
        }

        .spotlight {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, ${theme.text}15 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
          z-index: 5;
          mix-blend-mode: screen;
        }

        .grid-background {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(${theme.text}05 1px, transparent 1px),
            linear-gradient(90deg, ${theme.text}05 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%);
          z-index: 1;
        }

        .animated-gradient {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, ${theme.text}08 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: float-gradient 20s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes float-gradient {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-30%, -60%) scale(1.1); }
          66% { transform: translate(-70%, -40%) scale(0.9); }
        }

        .glitch-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 15vw, 12rem);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: 0.05em;
          color: ${theme.text};
          text-transform: uppercase;
          position: relative;
          display: inline-block;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: 'cX';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .glitch-text::before {
          color: ${theme.text};
          animation: glitch-1 2s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }

        .glitch-text::after {
          color: ${theme.text};
          animation: glitch-2 2s infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-3px); }
          40% { transform: translateX(3px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(3px); }
          40% { transform: translateX(-3px); }
          60% { transform: translateX(3px); }
          80% { transform: translateX(-3px); }
        }

        .subtitle-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.875rem, 2vw, 1.125rem);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0.6;
          font-weight: 400;
        }

        .description-text {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          line-height: 1.6;
          font-weight: 400;
          max-width: 800px;
          opacity: 0.85;
        }

        .feature-card-modern {
          position: relative;
          background: ${theme.background};
          border: 1px solid ${theme.text}15;
          border-radius: 0;
          padding: 3rem 2rem;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          overflow: hidden;
          height: 100%;
        }

        .feature-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: ${theme.text};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .feature-card-modern:hover::before {
          transform: scaleX(1);
        }

        .feature-card-modern::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, ${theme.text}05 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .feature-card-modern:hover::after {
          opacity: 1;
        }

        .feature-card-modern:hover {
          transform: translateY(-12px);
          border-color: ${theme.text}40;
          box-shadow: 0 20px 60px ${theme.background}80;
        }

        .feature-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 6rem;
          line-height: 1;
          opacity: 0.1;
          position: absolute;
          top: 1rem;
          right: 1rem;
          transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .feature-card-modern:hover .feature-number {
          opacity: 0.2;
          transform: scale(1.1);
        }

        .feature-title {
          font-family: 'Clash Display', sans-serif;
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .feature-description {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.75;
          margin-bottom: 1.5rem;
        }

        .feature-detail {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.5;
          border-top: 1px solid ${theme.text}15;
          padding-top: 1rem;
        }

        .cta-modern {
          position: relative;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 1.5rem 4rem;
          background: ${theme.text};
          color: ${theme.background};
          border: 2px solid ${theme.text};
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }

        .cta-modern::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: ${theme.background};
          transform: translate(-50%, -50%);
          transition: width 0.6s cubic-bezier(0.19, 1, 0.22, 1), height 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .cta-modern:hover::before {
          width: 400px;
          height: 400px;
        }

        .cta-modern:hover {
          color: ${theme.text};
          transform: translateY(-4px);
          box-shadow: 0 20px 40px ${theme.text}30;
        }

        .cta-modern span {
          position: relative;
          z-index: 1;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.4;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, ${theme.text}, transparent);
        }

        .parallax-layer {
          transition: transform 0.1s ease-out;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }

        .reveal-fade {
          opacity: 0;
          transform: translateY(40px);
          animation: revealFade 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        .reveal-fade:nth-child(1) { animation-delay: 0.2s; }
        .reveal-fade:nth-child(2) { animation-delay: 0.4s; }
        .reveal-fade:nth-child(3) { animation-delay: 0.6s; }
        .reveal-fade:nth-child(4) { animation-delay: 0.8s; }
        .reveal-fade:nth-child(5) { animation-delay: 1s; }

        @keyframes revealFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${theme.text}30, transparent);
          margin: 4rem 0;
        }

        .brand-mark {
          position: absolute;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20rem;
          opacity: 0.02;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .glitch-text {
            font-size: 4rem;
          }
          
          .feature-number {
            font-size: 4rem;
          }
          
          .brand-mark {
            font-size: 10rem;
          }
        }
      `}</style>

      <section className="hero-section min-h-screen">
        {/* Spotlight Effect */}
        <div 
          className="spotlight" 
          style={{ 
            left: mousePosition.x, 
            top: mousePosition.y 
          }} 
        />

        {/* Background Elements */}
        <div className="grid-background" />
        <div 
          className="animated-gradient" 
          style={{ 
            top: '20%', 
            left: '50%' 
          }} 
        />

        {/* Watermark */}
        <div className="brand-mark" style={{ top: '10%', right: '-10%' }}>cX</div>
        <div className="brand-mark" style={{ bottom: '-20%', left: '-15%' }}>cX</div>

        {/* Main Content */}
        <div className="content-wrapper min-h-screen flex flex-col justify-center items-center px-6 py-20">
          {/* Hero Section */}
          <div 
            ref={heroRef}
            className="parallax-layer max-w-7xl w-full mb-32"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px)` 
            }}
          >
            <div className="text-center mb-12 reveal-fade">
              <p className="subtitle-text mb-6">Premium Streetwear</p>
              <h1 className="glitch-text">cX</h1>
              <div className="section-divider my-8" />
            </div>

            <div className="text-center reveal-fade">
              <p className="description-text mx-auto mb-8">
                We're redefining urban fashion with meticulously crafted hoodies that blend 
                cutting-edge design with uncompromising quality. Each piece tells a story of 
                authenticity, comfort, and style.
              </p>
              <p className="subtitle-text">Est. 2026 • Designed for Everyone</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-7xl w-full mb-20 reveal-fade">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card-modern"
                  style={{
                    animationDelay: `${0.2 + index * 0.2}s`
                  }}
                >
                  <div className="feature-number">{feature.number}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-detail">{feature.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="reveal-fade">
            <button 
              className="cta-modern" 
              onClick={() => router.push('/shop')}
            >
              <span>Explore Collection</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line" />
            <p className="subtitle-text" style={{ fontSize: '0.625rem' }}>Scroll</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;