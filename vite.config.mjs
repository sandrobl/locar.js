import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.js'),
            name: 'locar',
            fileName: format => `locar.${format}.js`
        },
		/*
        aframe: {
            entry: resolve(__dirname, 'lib/aframe/main.js'),
            name: 'locar-aframe',
            fileName: (format) => `locar.${format}.js`
        },
		*/
        rollupOptions: {
            external: ['three'],
            output: {
                globals: {
                    three: 'THREE'
                }
            }
        }
//		minify: 'none'
    }
});
