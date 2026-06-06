'use client'

import { useEffect, useRef } from 'react'

export default function NewsletterSignup() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.id = 'form-script-tag-24303967'
    script.src = 'https://8b6a-hello.systeme.io/public/remote/page/41555416360cab84caa89e6fae20b5861adee06f.js'
    script.async = true

    containerRef.current.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div ref={containerRef} />
  )
}
