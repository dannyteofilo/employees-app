import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (request: any) => {
  const token = request.cookies.get("myToken");
  if (token === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode("secret")
    );
    console.log(payload);
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/employees", "/upload"],
};
