import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
describe('App', () => {
    it('renders hero and CTA', () => {
        render(_jsx(App, {}));
        expect(screen.getByRole('heading', { name: /build secure, fast landing pages/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /ready to capture leads/i })).toBeInTheDocument();
    });
});
