import { defineConfig } from 'vite';
import { resolve } from 'path';

const entries = { main: 'index.html' };
['01-helloworld', '02-gps-and-sensors'].forEach ( example => {
    entries[example] = resolve(__dirname, `${example}/index.html`);
});

export default defineConfig({
    build: {
		outDir: '../docs',
        rollupOptions: {
            input: entries 
        }
    }
});
