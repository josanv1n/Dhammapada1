
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Mengubah folder output menjadi 'build' sesuai permintaan Vercel settings Anda
  outDir: './build',
  
  // Menentukan cara aplikasi dirender (static build untuk performa terbaik)
  output: 'static',
  
  // Integrasi untuk menjalankan komponen React (.tsx)
  integrations: [react()],
});
