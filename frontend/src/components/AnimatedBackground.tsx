

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

const AnimatedBackground = ({ darkMode }: AnimatedBackgroundProps) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background base color */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ${
          darkMode ? "bg-slate-950" : "bg-slate-50"
        }`} 
      />

      {/* Animated Blobs (CSS optimized) */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] animate-blob-slow ${
          darkMode ? "bg-blue-900/40" : "bg-blue-400/30"
        }`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] animate-blob-medium ${
          darkMode ? "bg-purple-900/40" : "bg-purple-400/30"
        }`} />
        <div className={`absolute top-[20%] right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-blob-fast ${
          darkMode ? "bg-teal-900/20" : "bg-teal-300/20"
        }`} />
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className={`absolute inset-0 opacity-[0.05] ${
          darkMode ? "invert" : ""
        }`}
        style={{
          backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
