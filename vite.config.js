import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Three-D-Portfolio",
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
