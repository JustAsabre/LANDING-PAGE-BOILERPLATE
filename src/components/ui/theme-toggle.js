import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined')
            return 'light';
        const stored = localStorage.getItem('theme');
        if (stored)
            return stored;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark')
            root.classList.add('dark');
        else
            root.classList.remove('dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (_jsxs("button", { type: "button", "aria-label": "Toggle dark mode", className: "inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800", onClick: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), children: [theme === 'dark' ? _jsx(Sun, { size: 16 }) : _jsx(Moon, { size: 16 }), _jsxs("span", { className: "hidden sm:inline", children: [theme === 'dark' ? 'Light' : 'Dark', " mode"] })] }));
}
export default ThemeToggle;
