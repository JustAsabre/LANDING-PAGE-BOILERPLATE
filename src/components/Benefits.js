import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const items = [
    {
        title: 'Security-first',
        desc: 'CSP, security headers, env separation, and no unsafe HTML by default.'
    },
    {
        title: 'Performance',
        desc: 'Vite + code-splitting + Tailwind ensures fast loads and good Lighthouse scores.'
    },
    {
        title: 'Developer Experience',
        desc: 'TypeScript, ESLint, Prettier, and tests are pre-configured for smooth work.'
    }
];
export function Benefits() {
    return (_jsx("section", { id: "benefits", className: "bg-gray-50", children: _jsxs("div", { className: "container-responsive py-16 sm:py-20", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-900", children: "Why this boilerplate?" }), _jsx("ul", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it) => (_jsxs("li", { className: "rounded-lg border border-gray-200 bg-white p-6 shadow-sm", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: it.title }), _jsx("p", { className: "mt-2 text-gray-700", children: it.desc })] }, it.title))) })] }) }));
}
