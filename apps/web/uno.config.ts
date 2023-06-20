import { defineConfig } from 'unocss'
import myPreset from 'unoconfig'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [myPreset()],
  transformers: [transformerVariantGroup()]
})
