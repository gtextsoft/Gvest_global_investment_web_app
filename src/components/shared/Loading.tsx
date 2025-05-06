"use client"

import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

const LoadingPage = () => {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true)
    }, 60000) // 60,000 milliseconds = 1 minute

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        <Loader2 className="w-10 h-10 text-red-950 animate-spin" />
        <p className="text-base font-medium text-gray-500">
          {isDone ? "Finished Loading!" : "Loading..."}
        </p>
      </div>
    </div>
  )
}

export default LoadingPage
