import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
/**
 * SplashCursor
 * Lightweight cursor-follow radial glow that blends on top of the page.
 * - No event listeners on every element, just one on window.
 * - Uses CSS variables to avoid layout thrash; CSP-safe.
 */
export function SplashCursor({ colorClass = 'from-brand-400/40', radius = 160, className }) {
    const [coords, setCoords] = useState({ x: -9999, y: -9999 });
    const raf = useRef(null);
    const pending = useRef(null);
    useEffect(() => {
        function onMove(e) {
            pending.current = { x: e.clientX, y: e.clientY };
            if (raf.current == null) {
                raf.current = requestAnimationFrame(() => {
                    if (pending.current)
                        setCoords(pending.current);
                    raf.current = null;
                });
            }
        }
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMove);
            if (raf.current)
                cancelAnimationFrame(raf.current);
        };
    }, []);
    const style = {
        '--x': `${coords.x}px`,
        '--y': `${coords.y}px`,
        '--r': `${radius}px`
    };
    return (_jsx("div", { "aria-hidden": true, className: cn('pointer-events-none fixed inset-0 z-40 transition-opacity duration-300', 'bg-[radial-gradient(circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))]', colorClass, 'via-transparent to-transparent', className), style: style }));
}
export default SplashCursor;
