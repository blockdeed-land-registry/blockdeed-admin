import { createFileRoute } from '@tanstack/react-router'
import Login from '@/components/Login/Login'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <Login/>
    </div>
  )
}
