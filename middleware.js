import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Used to run agains all pages:
// export { default } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);

    if (
      // Example of multlple pages being blocked
      //   (req.nextUrl.pathname.startsWith("/CreateUser") ||
      //     req.nextUrl.pathname.startsWith("/Public"))
      req.nextUrl.pathname.startsWith("/CreateUser") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/CreateUser"] };
// Example of multiple pages being blocked
// export const config = { matcher: ["/CreateUser", "/Public"] };
