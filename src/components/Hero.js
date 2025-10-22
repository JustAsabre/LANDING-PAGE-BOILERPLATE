import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/Button';
import AuroraBackground from '@/components/ui/aurora-background';
export function Hero() {
    return (_jsx("section", { className: "bg-white dark:bg-gray-900", "aria-labelledby": "hero-title", children: _jsx(AuroraBackground, { children: _jsxs("div", { className: "container-responsive py-16 sm:py-24 flex flex-col items-start gap-6", children: [_jsx("h1", { id: "hero-title", className: "text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100", children: "Build secure, fast landing pages" }), _jsx("p", { className: "max-w-2xl text-lg text-gray-700 dark:text-gray-300", children: "A production-ready React + Tailwind boilerplate with security best practices, analytics, and a lead capture form." }), _jsxs("div", { className: "flex gap-3", children: [_jsx("a", { href: "#cta", children: _jsx(Button, { children: "Get Started" }) }), _jsx("a", { href: "#benefits", children: _jsx(Button, { variant: "secondary", children: "Learn More" }) })] })] }) }) }));
}
