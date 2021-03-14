import React from 'react';
import './index.css'

const colors: string[] = ["#D18DF0", " #F6E183", " #BDE666", " #FF555D", " #77A7FF"]

const paves: string[] = ["S", "O", "U", "S", " ", "L", "E", "S", " ", "P", "A", "V", "É", "S"]
const plage: string[] = ["L", "A", " ", "P", "L", "A", "G", "E"]

const key = (): number => Math.random();
const colorKey = (): number => Math.floor(Math.random()*5)

const sous: JSX.Element[] = paves.map(e => {
  if (e === " ") return <div className="empty" style={{border: "1px solid #001629"}} key={key()}>{e}</div>;
  else return <div className="ltr" key={key()} style={{border: `2px solid ${colors[colorKey()]}`}}>{e}</div>
})
const la: JSX.Element[] = plage.map(e => {
  if (e === " ") return <div className="empty" style={{border: "1px solid #001629"}} key={key()}>{e}</div>;
  else return <div className="ltr" key={key()} style={{border: `2px solid ${colors[colorKey()]}`}}>{e}</div>
})


function App(): JSX.Element {
  return (
    <div style={{marginTop: "80px"}}>
      <h2>Hello World!</h2>
      <div style={{marginTop: "80px"}} className="message">
        {sous}
      </div>
      <div className="message">
        {la}
      </div>
    </div>
  )
}

export default App;