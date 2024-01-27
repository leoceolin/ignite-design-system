/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { UserConfig, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
})
