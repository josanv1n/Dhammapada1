
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Mengembalikan folder output ke default 'dist'
  outDir: './dist',
  // Menentukan cara aplikasi dirender (static build)
  output: 'static',
  // Integrasi untuk menjalankan komponen React (.tsx)
  integrations: [react()],
});
