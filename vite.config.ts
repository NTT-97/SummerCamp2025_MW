// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<REPO_NAME>/', // Thay <REPO_NAME> bằng tên repo GitHub của bạn
  plugins: [react()],
});

