import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';


const PROTECTED_PREFIXES = ['/admin', '/teacher', '/parent'];


export async function middleware(req: NextRequest) {
const res = NextResponse.next();
const supabase = createMiddlewareClient({ req, res });
const { data: { session } } = await supabase.auth.getSession();


const path = req.nextUrl.pathname;
const needsAuth = PROTECTED_PREFIXES.some(p => path.startsWith(p));


if (needsAuth && !session) {
const url = new URL('/login', req.url);
url.searchParams.set('next', path);
return NextResponse.redirect(url);
}


return res;
}


export const config = {
matcher: ['/((?!_next/static|_next/image|favicon.ico|public).*)'],
};