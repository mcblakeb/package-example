import React, { useState } from 'react';

export interface ColorfulButtonProps {
  initialColor?: string;
  hoverColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ColorfulButton: React.FC<ColorfulButtonProps> = ({
  initialColor = '#007bff',
  hoverColor = '#0056b3',
  onClick,
  children,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const colors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b',
    '#eb4d4b', '#6ab04c', '#7ed6df', '#e056fd', '#686de0'
  ];

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    onClick?.();
  };

  const currentColor = colors[clickCount % colors.length];

  const buttonStyle: React.CSSProperties = {
    backgroundColor: currentColor,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {children}
    </button>
  );
};