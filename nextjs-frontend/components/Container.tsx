
import React from 'react'
import Link from 'next/link'

interface LinkType {
    index: number;
    url: string;
    title: string;
}

interface ContainerProps {
    links: LinkType[];
}

function Container(props: ContainerProps) {
    return (
        <div className="nano">
            {props.links.map((link) => (
                <Link className="link-url" key={link.index} href={link.url}>{link.title}</Link>
            ))}
        </div>
    )
}

export default Container
