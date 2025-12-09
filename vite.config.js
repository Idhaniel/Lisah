import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	server: {
		allowedHosts: [
			'89a0fbfe57a8.ngrok-free.app',
			'ecfb01d189c9.ngrok-free.app',
			'cd803e744a1f.ngrok-free.app'
		]
	},
	build: {
		outDir: 'dist',
		emptyOutDir: true
	}
});
