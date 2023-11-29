import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/books":
        "https://book-store-project-backend-i8okrc6ck-rahul-namavarams-projects.vercel.app/",
    },
  },
  plugins: [react()],
});


