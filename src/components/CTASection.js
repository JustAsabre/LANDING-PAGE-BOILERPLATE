import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Button } from '@/components/Button';
import { validateEmail, sanitizeString } from '@/lib/validation';
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
export function CTASection() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');
    const action = useMemo(() => {
        if (FORMSPREE_ENDPOINT)
            return FORMSPREE_ENDPOINT;
        return undefined;
    }, []);
    async function onSubmit(e) {
        e.preventDefault();
        const cleanName = sanitizeString(name);
        const cleanMsg = sanitizeString(message);
        if (!validateEmail(email)) {
            setStatus('error');
            return;
        }
        if (action) {
            try {
                setStatus('submitting');
                const res = await fetch(action, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, name: cleanName, message: cleanMsg })
                });
                if (res.ok) {
                    setStatus('success');
                    setEmail('');
                    setName('');
                    setMessage('');
                }
                else {
                    setStatus('error');
                }
            }
            catch {
                setStatus('error');
            }
        }
        else {
            // Netlify forms will handle submission if hosted on Netlify
            setStatus('submitting');
            setTimeout(() => setStatus('success'), 500);
        }
    }
    return (_jsx("section", { id: "cta", className: "bg-white", children: _jsxs("div", { className: "container-responsive py-16 sm:py-20", children: [_jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-900", children: "Ready to capture leads?" }), _jsx("p", { className: "mt-2 text-gray-700", children: "Sign up to receive a demo and onboarding resources." })] }), _jsxs("form", { onSubmit: onSubmit, name: "lead", method: action ? 'POST' : 'POST', action: action, "data-netlify": !action ? 'true' : undefined, "data-netlify-honeypot": "bot-field", className: "mx-auto mt-8 max-w-xl space-y-4", children: [_jsx("input", { type: "hidden", name: "form-name", value: "lead" }), _jsx("p", { className: "hidden", children: _jsxs("label", { children: ["Don\u2019t fill this out if you're human: ", _jsx("input", { name: "bot-field" })] }) }), _jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Name" }), _jsx("input", { id: "name", name: "name", type: "text", autoComplete: "name", value: name, onChange: (e) => setName(e.target.value), className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-brand-500", placeholder: "Jane Doe" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-brand-500", placeholder: "you@example.com" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Message" }), _jsx("textarea", { id: "message", name: "message", rows: 4, value: message, onChange: (e) => setMessage(e.target.value), className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:ring-brand-500", placeholder: "Tell us a bit about your needs..." })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Button, { type: "submit", disabled: status === 'submitting', children: status === 'submitting' ? 'Submitting…' : 'Request Demo' }), status === 'success' && _jsx("span", { className: "text-green-600", children: "Thanks! We\u2019ll be in touch." }), status === 'error' && _jsx("span", { className: "text-red-600", children: "Check your details and try again." })] })] })] }) }));
}
