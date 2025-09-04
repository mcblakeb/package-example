import React from 'react';

interface ColorfulButtonProps {
    initialColor?: string;
    hoverColor?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}
declare const ColorfulButton: React.FC<ColorfulButtonProps>;

export { ColorfulButton };
export type { ColorfulButtonProps };
