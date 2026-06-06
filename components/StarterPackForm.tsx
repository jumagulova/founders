'use client'

import { useEffect, useRef } from 'react'

export default function StarterPackForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.id = 'form-script-tag-24303741'
    script.src = 'https://8b6a-hello.systeme.io/public/remote/page/415544467a16d856db1dcbbffd314546152ff893.js'
    script.async = true

    containerRef.current.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div ref={containerRef} className="max-w-xl mx-auto" />
  )
}
