import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue()],
    server: {
      port: Number(process.env.VITE_PORT)
    },
    resolve: {
      alias: [{
        find: "@",
        replacement: process.cwd() + "/src",
      }],
    },
  })
}

