import * as React from "react"

function App(): JSX.Element {
  return (
    <>
      <style jsx>{`
        div {
          padding: 20px;
          background: #eee;
          color: #999;
        }
        .large {
          padding: 50px;
        }
      `}</style>
      <div>Hello</div>
    </>
  )
}

export default App
