import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), 'VITE_');
    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@/components/ui/theme-toggle': fileURLToPath(new URL('./src/components/ui/theme-toggle.tsx', import.meta.url))
            },
            extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx', '.json']
        },
        server: {
            port: 5173,
            strictPort: true
        },
        build: {
            sourcemap: mode !== 'production'
        },
        define: {
            __GA_MEASUREMENT_ID__: JSON.stringify(env.VITE_GA_MEASUREMENT_ID || '')
        },
        test: {
            environment: 'jsdom',
            setupFiles: './vitest.setup.ts',
            globals: true
        }
    };
});
