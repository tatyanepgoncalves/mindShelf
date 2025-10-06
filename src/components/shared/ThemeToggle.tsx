import { useTheme } from '@/hooks/useTheme'
import { Button } from '../ui/button'
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <Button type='button' className='bg-transparent hover:bg-transparent text-purple-800 dark:text-purple-200 text-sm flex items-center gap-2 duration-300 transition-discrete' onClick={toggleTheme} >
      {isDark ?  "Claro" : "Escuro"}
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
