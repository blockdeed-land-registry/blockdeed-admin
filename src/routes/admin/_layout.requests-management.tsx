import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/requests-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout/request-management"!</div>
}
