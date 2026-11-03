import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'hover'>('default');
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on non-touch desktop devices and when reduced motion is not preferred
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('a, button, [data-cursor="hover"]');

      if (projectEl) {
        setCursorType('project');
      } else if (interactiveEl) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const render = () => {
      // Smooth interpolation for the follower ring
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center Lead Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#141413] transition-opacity duration-200 ${
          cursorType === 'project' ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Follower Pill / Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 transition-[width,height,background-color,border-radius,padding] duration-300 ease-out flex items-center justify-center ${
          cursorType === 'project'
            ? '-ml-20 -mt-5 h-10 px-4 rounded-full bg-[#141413] text-[#FAF8F5] text-[10px] font-bold tracking-widest uppercase shadow-xl'
            : cursorType === 'hover'
            ? '-ml-5 -mt-5 w-10 h-10 rounded-full border border-[#141413]/40 bg-[#141413]/5 backdrop-blur-[1px]'
            : '-ml-4 -mt-4 w-8 h-8 rounded-full border border-[#141413]/25 bg-transparent'
        }`}
      >
        {cursorType === 'project' && (
          <span className="whitespace-nowrap flex items-center gap-1.5">
            <span>VIEW CASE STUDY</span>
            <span className="text-xs">↗</span>
          </span>
        )}
      </div>
    </div>
  );
};
