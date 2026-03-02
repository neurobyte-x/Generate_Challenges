import React from "react"
import { SignedIn,SignedOut,UserButton } from "@clerk/clerk-react"
import { Outlet,Navigate,Link } from "react-router-dom"

export function Layout() {
    return <div className="app-layout">
        <header className="app-header">
            <div className="header-content">
                <h1>
                    <Link to="/">Code Challenge Generator</Link></h1>
                <nav>
                    <SignedIn>
                        <Link to="/">Generate Challenge</Link>
                        <Link to="/history">History</Link>
                        <UserButton/>
                    </SignedIn>
                </nav>
            </div>
        </header>

        <main className="app-main">
            <SignedOut>
                <Navigate to="/sign-in" replace/>
            </SignedOut>
            <SignedIn>
                <Outlet/>
            </SignedIn>
        </main>
    </div>
}