import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const user = 'true'
 if(!user){
  return NextResponse.redirect(
    new URL('/', request.url)
  )
 }
  return NextResponse.next()
}
 
export const config = {
  matcher: ['/admin', '/admin/user']
}