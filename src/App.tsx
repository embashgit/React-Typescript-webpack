import * as React from 'react'
import './styles.css'

export interface AppsProps {
  userName: string
  lang: string
}

export default function App(props: AppsProps) {
  return (
    <div className="Wrapper">
      <h1 className="title">Getting Started</h1>
      <h2 className="subtitle">With</h2>
      <h2 className="titlebody">React TypeScript, Webpack and Linters</h2>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum
        accusamus deleniti earum repellendus voluptatum! Harum iste eveniet
        soluta repudiandae ratione illo maiores nemo. Non quam dolor quas
        reprehenderit numquam.
      </p>
      <hr className="rule" />
    </div>
  )
}
