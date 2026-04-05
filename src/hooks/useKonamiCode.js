import { useState, useEffect } from 'react'

const useKonamiCode = (onUnlock, onHint) => {
  const konamiSeq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement.tagName === 'INPUT') return
      if (e.key === konamiSeq[index]) {
        if (index === 3) onHint()
        if (index + 1 === konamiSeq.length) { onUnlock(); setIndex(0) }
        else { setIndex(index + 1) }
      } else { setIndex(0) }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index, onUnlock, onHint])
}

export default useKonamiCode
