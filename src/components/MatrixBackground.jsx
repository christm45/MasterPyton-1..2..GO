import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 14
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFabcdef{}[]<>=/\\|;:+-*&^%$#@!~'
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array.from({ length: columns }, () =>
      Math.random() * -canvas.height / fontSize
    )

    const draw = () => {
      // Semi-transparent black to create fade trail
      ctx.fillStyle = 'rgba(6, 6, 15, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Bright leading character
        const brightness = Math.random()
        if (brightness > 0.95) {
          ctx.fillStyle = '#ffffff'
          ctx.shadowColor = '#00ff41'
          ctx.shadowBlur = 10
        } else if (brightness > 0.8) {
          ctx.fillStyle = '#00ff41'
          ctx.shadowColor = '#00ff41'
          ctx.shadowBlur = 6
        } else {
          ctx.fillStyle = `rgba(0, ${100 + Math.floor(Math.random() * 80)}, 0, ${0.4 + Math.random() * 0.4})`
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
        }

        ctx.fillText(char, x, y)
        ctx.shadowBlur = 0

        // Reset drop to top when it falls off screen (with randomness)
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 0.5 + Math.random() * 0.5
      }
    }

    const interval = setInterval(draw, 45)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-bg" />
}
