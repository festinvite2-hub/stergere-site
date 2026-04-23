import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const shutdownHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Site removed</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body>Site removed</body>
</html>`;

export function middleware(request: NextRequest) {
  if (request.method === 'HEAD') {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  return new NextResponse(shutdownHtml, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=0, must-revalidate',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
