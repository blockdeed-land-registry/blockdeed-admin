import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout/notifications"!</div>
}
