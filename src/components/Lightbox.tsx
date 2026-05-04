import { useEffect } from "react";

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out"
      style={{ animation: "fade-up 0.3s ease-out" }}
    >
      <img src={src} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-romantic object-contain" />
    </div>
  );
}
