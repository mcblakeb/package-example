I'll guide you through creating a reusable React button component package on GitHub. Here's a step-by-step approach:

## 1. Set Up the Project Structure

Create a new directory and initialize it:

```bash
mkdir colorful-button-package
cd colorful-button-package
npm init -y
```

## 2. Install Dependencies

```bash
npm install react react-dom --peer-dependencies
npm install --save-dev @types/react @types/react-dom typescript rollup @rollup/plugin-typescript rollup-plugin-dts
```

## 3. Package.json Configuration

Update your `package.json`:

```json
{
  "name": "colorful-button",
  "version": "1.0.0",
  "description": "A reusable React button that changes colors on click",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@rollup/plugin-typescript": "^11.0.0",
    "rollup": "^3.0.0",
    "rollup-plugin-dts": "^5.0.0",
    "typescript": "^4.9.0"
  },
  "keywords": ["react", "button", "component", "ui"],
  "author": "Your Name",
  "license": "MIT"
}
```

## 4. TypeScript Configuration

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## 5. Rollup Configuration

Create `rollup.config.js`:

```javascript
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'named'
      }
    ],
    plugins: [typescript()],
    external: ['react', 'react-dom']
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];
```

## 6. Create the Button Component

Create `src/ColorfulButton.tsx`:

```tsx
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
```

## 7. Create the Main Export

Create `src/index.ts`:

```tsx
export { ColorfulButton } from './ColorfulButton';
export type { ColorfulButtonProps } from './ColorfulButton';
```

## 8. Build the Package

```bash
npm run build
```

## 9. Set Up GitHub Repository

Create a `.gitignore` file:

```
node_modules/
dist/
.DS_Store
```

Initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: ColorfulButton component"
git branch -M main
git remote add origin https://github.com/your-username/colorful-button.git
git push -u origin main
```

## 10. Publish to npm (Optional)

If you want to publish to npm:

```bash
npm login
npm publish
```

## 11. Using the Package in Other Applications

### For GitHub Package:
```bash
npm install github:your-username/colorful-button
```

### For npm Package:
```bash
npm install colorful-button
```

### Usage in React App:
```tsx
import React from 'react';
import { ColorfulButton } from 'colorful-button';

function App() {
  return (
    <div>
      <ColorfulButton onClick={() => console.log('Clicked!')}>
        Click me!
      </ColorfulButton>
    </div>
  );
}

export default App;
```

## Additional Files to Include:

1. **README.md** - Documentation
2. **LICENSE** - Choose a license (MIT recommended)
3. **.npmignore** - Exclude unnecessary files from npm package