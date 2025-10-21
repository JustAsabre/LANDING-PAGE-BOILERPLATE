import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export function Footer() {
    const year = new Date().getFullYear();
    return (_jsx("footer", { className: "mt-16 border-t border-gray-200 bg-white py-8", children: _jsxs("div", { className: "container-responsive text-center text-sm text-gray-600", children: ["\u00A9 ", year, " YourBrand. All rights reserved."] }) }));
}
