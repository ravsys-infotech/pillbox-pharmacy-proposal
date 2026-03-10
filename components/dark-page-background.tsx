const DOT_GRID_STYLE = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
};

// 'compact' variant is used on the thank-you page (slightly smaller blobs, tighter positioning)
export function DarkPageBackground({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <>
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#3B82F6] opacity-[0.07] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#EC4899] opacity-[0.07] blur-[130px] pointer-events-none" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[250px] rounded-full bg-[#8B5CF6] opacity-[0.06] blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={DOT_GRID_STYLE} />
      </>
    );
  }
  return (
    <>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3B82F6] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#EC4899] opacity-[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#8B5CF6] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={DOT_GRID_STYLE} />
    </>
  );
}
