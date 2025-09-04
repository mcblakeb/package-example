import React from 'react';
export interface ColorfulButtonProps {
    initialColor?: string;
    hoverColor?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const ColorfulButton: React.FC<ColorfulButtonProps>;
