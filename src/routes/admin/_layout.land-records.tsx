import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout/land-records')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/_layout/land-records"!</div>
}
