import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import SplashCursor from '@/components/ui/splash-cursor';
export function App() {
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(SplashCursor, {}), _jsx(Header, {}), _jsxs("main", { className: "flex-1", children: [_jsx(Hero, {}), _jsx(Benefits, {}), _jsx(CTASection, {})] }), _jsx(Footer, {})] }));
}
