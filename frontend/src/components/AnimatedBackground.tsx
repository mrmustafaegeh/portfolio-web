interface AnimatedBackgroundProps {
  darkMode?: boolean; // kept for legacy compat during transition
}

const AnimatedBackground = ({}: AnimatedBackgroundProps) => {
  return (
    <div className="fixed inset-0 -z-10 bg-darkBg overflow-hidden pointer-events-none">
      {/* Central subtle radial gradient for depth */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(202, 255, 0, 0.03) 0%, rgba(8, 8, 8, 1) 60%)'
        }}
      />
      
      {/* Minimal grid for architectural feel */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
