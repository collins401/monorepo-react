import type { Preset } from 'unocss'
import { presetAttributify, presetIcons, presetTypography, presetUno } from 'unocss'

function withOpacityValue(variable) {
  return `rgb(var(${variable}))`
}

function toWith(d) {
  if (Number(d) || Number(d) === 0) {
    if (Number(d) === 0)
      return 0

    return `${d / 4}rem`
  }
  if (['px', 'rem', 'vh', 'vw'].some(x => d.endsWith(x)))
    return d

  return 0
}

export default function myPreset(options: MyPresetOptions): Preset {
  return {
    name: 'my-preset',
    presets: [presetUno(), presetAttributify(), presetIcons(), presetTypography()],
    theme: {
      colors: {
        primary: '#3f74e5',
        danger: '#EB5B59',
        color: withOpacityValue('--color-default'), // 常规文字颜色 text-color/80,text-color/60 ...
      },
      screens: {
        '3xl': '1720px',
      },
    },
    shortcuts: {
      'flex-between': 'flex items-center justify-between',
      'flex-center': 'flex items-center justify-center',
    },
    rules: [
      [
        /^size-(.*)$/,
        ([, d]) => {
          if (Number(d))
            return { width: `${d / 4}rem`, height: `${d / 4}rem` }

          if (['px', 'rem', 'vh', 'vw'].some(x => d.endsWith(x)))
            return { width: d, height: d }
        },
      ],
      // p-2-3-4-5 => padding: 0.5rem 0.75rem 1rem 1.25rem
      [
        /^p-(\d+)(?:-(\d+)(?:-(\d+)(?:-(\d+))?)?)?$/,
        ([, t, r, b, l]) => {
          // 如果只有一个数字，就返回null,按默认逻辑处理
          if (r || b || l) {
            r = r || t
            b = b || t
            l = l || r
            return {
              padding: `${toWith(t)} ${toWith(r)} ${toWith(b)} ${toWith(l)}`,
            }
          }
        },
      ],
      // m-2-3-4-5 => margin: 0.5rem 0.75rem 1rem 1.25rem
      [
        /^m-(\d+)(?:-(\d+)(?:-(\d+)(?:-(\d+))?)?)?$/,
        ([, t, r, b, l]) => {
          // 如果只有一个数字，就返回null,按默认逻辑处理
          if (r || b || l) {
            r = r || t
            b = b || t
            l = l || r
            return {
              margin: `${toWith(t)} ${toWith(r)} ${toWith(b)} ${toWith(l)}`,
            }
          }
        },
      ],
    ],
    // it supports most of the configuration you could have in the root config
  }
}
