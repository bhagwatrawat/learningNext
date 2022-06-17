import React from 'react'
import Link from 'next/link'
function MainNavigation() {
  return (
    <div>
        <h1>React Meetups</h1>
        <nav>
            <ul>
                <li>
                    <Link href="/">All Meetups</Link>
                </li>
                <li>
                    <Link href="/new-meetup">Add New Meetup</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default MainNavigation