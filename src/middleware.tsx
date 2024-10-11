// export function middleware(request: NextRequest) {
//     const pathname = request.nextUrl.pathname;
//     const locale = pathname.split('/')[1];

//     console.log(`Request pathname: ${pathname}`);
//     console.log(`Detected locale: ${locale}`);

//     if (!['en', 'ko'].includes(locale)) {
//         const url = request.nextUrl.clone();
//         url.pathname = `/en${pathname}`; // Chuyển hướng đến ngôn ngữ mặc định nếu không có ngôn ngữ trong URL
//         return NextResponse.redirect(url);
//     }
// }

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
export default createMiddleware(routing);
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ko)/:path*'],
};
