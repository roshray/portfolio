import { getToken } from "next-auth/react"
import { NextResponse } from "next/server"

export async function middleare(req) {

    const token = await getToken({req, secret: process.env.JWT_SECRET})
    const { pathname } = req.nextUrl 

    if(pathname.includes('/api/auth') || token ) {
        return NextResponse.next()
    }

    if (!token && pathname !== '/login') {
        return NextResponse.redirect('/login')
    }
}