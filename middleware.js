import { NextResponse } from "next/server";

export async function middleware(request){
    const token = request.cookies.get("token")

    if(!token){
        const signInURL = new URL("/login", request.url)
        return NextResponse.redirect(signInURL)
    }
    
    return NextResponse.next()
}

export const config = {
    matcher:["/reservations/:path*"]
}