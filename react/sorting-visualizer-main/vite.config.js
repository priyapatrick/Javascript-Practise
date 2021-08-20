import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr:{
      overlay:false
    }
  },
  plugins: [reactRefresh()],
  build: {
    target: 'es2018'
     }})
