import { defineConfig } from 'vite';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';

const entries = { main: 'index.html' };
['01-helloworld', '02-gps-and-sensors', '03-api-communication', 'devorient'].forEach ( example => {
    entries[example] = resolve(__dirname, `${example}/index.html`);
});

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/locar.js' : '/',
    plugins: [mkcert()],
    server: {
        host: true,
        https: true
    },
    build: {
        outDir: '../docs',
        rollupOptions: {
            input: entries 
        }
    }
});
