import { useRouter } from 'next/navigation';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for the glass shine effect
const shine = keyframes`
  0% {
    transform: translateX(-100%) rotate(30deg);
  }
  20% {
    transform: translateX(100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) rotate(30deg);
  }
`;

const ProductCard = ({ game }) => {
  const router = useRouter();
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimer = useRef(null);

  // Trigger the shine animation at random intervals
  useEffect(() => {
    const startAnimation = () => {
      const randomDelay = 3000 + Math.random() * 5000; // 3-8 seconds
      animationTimer.current = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
          startAnimation(); // Queue next animation
        }, 1000); // Animation duration
      }, randomDelay);
    };

    startAnimation();

    return () => {
      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    router.push(`/checkoutpage?game=${encodeURIComponent(game.title)}&publisher=${encodeURIComponent(game.publisher || '')}&image=${encodeURIComponent(game.image || '')}&price=${game.price || '0'}`);
  };

  const handleMove = useCallback((clientX, clientY) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on touch/mouse position
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseMove = useCallback((e) => {
    handleMove(e.clientX, e.clientY);
  }, [handleMove]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
      e.preventDefault(); // Prevent scrolling while interacting
      
      // Add a class to body to prevent scrolling while interacting
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }
  }, [handleMove]);
  
  // Reset touch styles when interaction ends
  const resetTouchStyles = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    resetTouchStyles();
  }, [resetTouchStyles]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      resetTouchStyles();
    };
  }, [resetTouchStyles]);

  return (
    <CardContainer>
      <Card 
        ref={cardRef}
        className="card" 
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => {
          handleMouseEnter();
          setIsAnimating(true);
        }}
        onMouseLeave={() => {
          handleInteractionEnd();
          // Don't stop animation on mouse leave to allow it to complete
        }}
        onTouchStart={(e) => {
          handleMouseEnter();
          setIsAnimating(true);
          // Initialize touch position for smoother start
          if (e.touches.length > 0) {
            const touch = e.touches[0];
            handleMove(touch.clientX, touch.clientY);
          }
        }}
        onTouchEnd={() => {
          handleInteractionEnd();
          // Don't stop animation on touch end to allow it to complete
        }}
        onTouchCancel={handleInteractionEnd} // Handle touch cancellation
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'none' : 'transform 0.5s ease, box-shadow 0.5s ease',
          touchAction: 'none', // Prevent default touch actions like scrolling
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glass shine effect */}
        <GlassShine 
          className={isAnimating ? 'shining' : ''}
          onAnimationEnd={() => setIsAnimating(false)}
          style={{
            '--shine-opacity': isHovered ? '0.7' : '0.6',
          }}
        />
        <ImageContainer>
          <GameImage 
            src={game.image} 
            alt={game.title} 
            style={{
              transform: `translateZ(${isHovered ? '30px' : '0'})`,
              transition: 'transform 0.5s ease',
            }}
          />
        </ImageContainer>
        <BottomCard>
          <GameTitle>{game.title}</GameTitle>
          <Publisher>{game.publisher || 'Unknown Publisher'}</Publisher>
        </BottomCard>
        {isHovered && <CardGlare style={{
          background: `radial-gradient(circle at ${rotate.y * 10 + 50}% ${rotate.x * 10 + 50}%, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(255, 255, 255, 0.4) 30%, 
            rgba(0, 0, 0, 0) 70%)`
        }} />}
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  aspect-ratio: 2/3;
  
  @media (min-width: 768px) {
    max-height: 500px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  will-change: transform;
  backface-visibility: hidden;
  transform: perspective(1000px) rotateX(0) rotateY(0) translateZ(0);
  -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */
  -webkit-touch-callout: none; /* Disable the iOS popup on long-press */
  touch-action: none; /* Disable default touch actions for better control */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.03));
    border-radius: 16px;
    z-index: 1;
    pointer-events: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  flex-grow: 1;
  min-height: 0;
  transform-style: preserve-3d;
  transform: translateZ(20px);
  transition: transform 0.5s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  
  &::before {
    content: '';
    display: block;
    padding-top: 150%; /* 2:3 aspect ratio */
  }
  
  @media (min-width: 768px) {
    &::before {
      padding-top: 133.33%; /* 3:4 aspect ratio for desktop */
    }
  }
  
  @media (max-width: 768px) {
    transform: translateZ(20px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    
    &::before {
      padding-top: 150%; /* 2:3 aspect ratio for mobile */
    }
  }
`;

const GameImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  object-position: center;
  will-change: transform;
  backface-visibility: hidden;
`;

const BottomCard = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 2;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px;
  transform: translateZ(20px);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  
  ${Card}:hover & {
    background: rgba(0, 0, 0, 0.95);
    transform: translateZ(30px);
  @media (min-width: 768px) {
    bottom: 1.25rem;
    left: 1.25rem;
    right: 1.25rem;
  }
`;

const GameTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: #ffffff !important;
  text-shadow: 
    0 0 8px rgba(0, 0, 0, 0.9),
    0 1px 1px #000,
    0 1px 2px #000,
    0 0 20px rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  letter-spacing: 0.02em;
  line-height: 1.3;
  text-stroke: 0.3px rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    font-weight: 600;
    text-shadow: 
      0 0 6px rgba(0, 0, 0, 0.9),
      0 1px 1px #000,
      0 0 15px rgba(0, 0, 0, 0.8);
    -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.5);
  }
`;

const Publisher = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const GlassShine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, var(--shine-opacity, 0.6)) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%) rotate(30deg);
  transition: opacity 0.3s ease;
  opacity: 0;
  mix-blend-mode: overlay;
  border-radius: 16px;

  &.shining {
    animation: ${shine} 1s ease-in-out;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

// Add the CardGlare component back if needed elsewhere
const CardGlare = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  border-radius: 16px;
  mix-blend-mode: overlay;
  opacity: 0;
`;

export default ProductCard;