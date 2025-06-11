import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/user-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout/user"!</div>
}
