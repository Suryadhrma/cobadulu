import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cobadulu/', // Ganti dengan nama repository GitHub kamu
  build: {
    sourcemap: true, // Aktifkan sourcemap jika diperlukan
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Semua dependensi dari node_modules akan dimasukkan ke dalam chunk vendor
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Naikkan batas peringatan ukuran chunk
  },
}
);
