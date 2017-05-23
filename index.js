import { Link, StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const Nav = _ => 
  <div>
    <h3>Demo gh-pages Routing</h3>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>

const Home = _ =>
  <div>
    <Nav />
    <h1>Home</h1>
  </div>

const About = _ => 
  <div>
    <Nav />
    <h1>About</h1>
  </div>

const Html = props => (
  <html>
    <head>
      <title>Static gh-pages Routing Demo</title>
    </head>
    <body>
      {props.children}
      <script src="/index.js" />
    </body>
  </html>
)

export default locals => {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter basename="/demo-routing-gh-pages" location={locals.path} context={{}}>
      <Html>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Html>
    </StaticRouter>
  )
}
