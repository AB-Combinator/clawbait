export default function ScanlineOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)",
      }}
      aria-hidden="true"
    />
  );
}
