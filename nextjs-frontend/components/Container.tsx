
import React from 'react'
import Link from 'next/link'

function Container(props) {
    return (
        <div className="nano">

            {props.links.map((link) => (
                // do we add another component here?
                // list?
                <Link className="link-url" key={link.index} href={link.url}>{link.title}</Link>
            ))}
        </div>
    )
}

export default Container
