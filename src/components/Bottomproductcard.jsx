import React from 'react';
import styled from 'styled-components';
import { FaBolt, FaShieldAlt, FaTag, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaBolt className="icon" />,
    title: "Instant Recharge",
    description: "Top up your game balance in just seconds — no delays, no downtime."
  },
  {
    icon: <FaShieldAlt className="icon" />,
    title: "Secure Payments",
    description: "Every transaction is encrypted and protected for your peace of mind."
  },
  {
    icon: <FaTag className="icon" />,
    title: "Best Prices",
    description: "Get the most value for your money with our competitive rates."
  },
  {
    icon: <FaHeadset className="icon" />,
    title: "24/7 Support",
    description: "Get help whenever you need it, day or night."
  }
];

const WhyChooseUs = () => {
  return (
    <Container>
      <BlurCard>
        <Title>Why Gamers Choose Us</Title>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </BlurCard>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0.5rem auto 0;
  padding: 0 1rem 2rem;
  position: relative;
  z-index: 30;
  
  @media (min-width: 768px) {
    max-width: 97%;
  }
  
  @media (min-width: 1024px) {
    max-width: 1500px;
  }
`;

const BlurCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
  position: relative;
  z-index: 10;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
    opacity: 0;
  }
  
  @keyframes shine {
    0% {
      left: -50%;
      opacity: 0;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      left: 150%;
      opacity: 0;
    }
  }
  
  &:hover::before {
    animation: shine 1.5s infinite;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin: 0 0 1.5rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 60px;
    height: 3px;
    background: #22c55e;
    transform: translateX(-50%);
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  
  @media (max-width: 640px) {
    gap: 0.6rem;
  }
`;

const FeatureCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  padding: 1rem 0.6rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    background: rgba(0, 0, 0, 0.4);
  }
  
  h3 {
    color: #fff;
    font-size: 0.9rem;
    margin: 0.5rem 0 0.4rem;
    font-weight: 600;
    white-space: nowrap;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.75rem;
    line-height: 1.4;
    margin: 0;
    padding: 0 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 3.15rem; /* 3 lines * line-height 1.4 * font-size 0.75rem */
  }
  
  @media (max-width: 768px) {
    min-height: 160px;
    padding: 1.2rem 0.6rem;
    
    p {
      -webkit-line-clamp: 4;
      min-height: 4.2rem; /* 4 lines * line-height 1.4 * font-size 0.75rem */
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 1rem;
  color: #fff;
  background: #22c55e;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
  flex-shrink: 0;
  
  .icon {
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  }
`;

export default WhyChooseUs;