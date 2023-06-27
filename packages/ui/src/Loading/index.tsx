import * as React from 'react'
import { Spin } from 'antd'
import { useEffect } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export function Loading() {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  })
  return (
    <div className="text-center p-4">
      <Spin />
    </div>
  )
}
