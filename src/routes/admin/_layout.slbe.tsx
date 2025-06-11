import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/slbe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout/System Logs and Blockchain Explorer</div>
}
