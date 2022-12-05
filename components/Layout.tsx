import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {

  const customStyle = {
            textDecoration: 'none',
            height: "40px",
            width: "120px",
            justifyContent: 'center',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            backgroundColor: "grey",
            borderRadius: "5px",
          }

  return(
  
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
     
      <div style={{
      paddingTop: '10px',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        gap: "30px"
      }}>
        <Link 
          style={{
            ...customStyle,
            fontFamily: "Zen Dots",
            padding: '5px',
            width: '150px',
            backgroundColor: '#2e3440',
            color: '#d8dee9'
          }}  
          href="/">Vishal's House</Link> | <Link style={customStyle} href="/about">About</Link> |{' '}
        <Link style={customStyle} href="/users">Users List</Link> |{' '}
        <a style={customStyle} href="/api/users">Users API</a>
      </div>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)
} 

export default Layout
