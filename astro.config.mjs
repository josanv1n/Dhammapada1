
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Mengubah folder output dari 'dist' ke 'build'
  outDir: './build',
  // Menentukan cara aplikasi dirender (static build)
  output: 'static',
  // Integrasi untuk menjalankan komponen React (.tsx)
  integrations: [react()],
});
