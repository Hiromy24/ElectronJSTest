import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // Carpeta de salida
        rollupOptions: {
            input: {
                main: 'src/pages/index.html',
                callback: 'src/pages/callback.html'
            }
        }
    }
});
