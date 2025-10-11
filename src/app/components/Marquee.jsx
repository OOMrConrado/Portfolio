
export default function Marquee({ children, duration = "15s" }) {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div
        className="inline-flex animate-(--animate-marquee)"
        style={{ animationDuration: duration }}
      >
        {children}
        {children}
      </div>
      {/* Gradientes para fade en los costados */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base-100 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base-100 to-transparent pointer-events-none"></div>
    </div>
  );
}
