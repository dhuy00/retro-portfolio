export function DotGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}