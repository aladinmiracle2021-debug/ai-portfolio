export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}
