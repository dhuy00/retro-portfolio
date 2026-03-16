import { useEffect, useState } from 'react';


export function FloatingShapes() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const colors = ['bg-blue-300', 'bg-pink-300', 'bg-yellow-300', 'bg-green-300', 'bg-purple-300'];
    const shapeTypes = ['square', 'circle', 'triangle'];
    
    const initialShapes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 30 + Math.random() * 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      speed: 10 + Math.random() * 20,
    }));

    setShapes(initialShapes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.color} border-2 border-black opacity-20`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            borderRadius: shape.shape === 'circle' ? '50%' : '0',
            clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            animation: `float-${shape.id} ${shape.speed}s ease-in-out infinite`,
            // zIndex: 0
          }}
        />
      ))}
      <style>{`
        ${shapes.map((shape) => `
          @keyframes float-${shape.id} {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -20px) rotate(90deg); }
            50% { transform: translate(0, -40px) rotate(180deg); }
            75% { transform: translate(-20px, -20px) rotate(270deg); }
          }
        `).join('')}
      `}</style>
    </div>
  );
}
