import { defineConfig } from 'unocss'
import myPreset from 'config/unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [myPreset()],
  transformers: [transformerVariantGroup()]
})
