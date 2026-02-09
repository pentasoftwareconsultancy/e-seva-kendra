import { useState } from 'react'

export function useDemo() {
  const [value, setValue] = useState(null)
  return [value, setValue]
}
