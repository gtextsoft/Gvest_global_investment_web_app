import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Extract the cookie
  const allCookies = request.cookies.getAll();
  console.log("All Cookies:----", allCookies);
  const cookie = request.cookies.get("accesstoken");
  console.log("cookies----", cookie);
  const accessToken = request.cookies.get("accesstoken")?.value;
  // const authToken = request.cookies.get("auth_token")?.value;

  console.log("Access Token:", accessToken);

  // Proceed to the next middleware or route
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile/:path*", "/dashboard/:path*"],
};
