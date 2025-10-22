import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export function Footer() {
    const year = new Date().getFullYear();
    return (_jsx("footer", { className: "mt-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8", children: _jsxs("div", { className: "container-responsive text-center text-sm text-gray-600 dark:text-gray-400", children: ["\u00A9 ", year, " YourBrand. All rights reserved."] }) }));
}
