import { useState } from "react"
const Form = ({addColor}) => {
  const [color,setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className='container' onSubmit={handleSubmit}>
      <h4>color-generator</h4>
      <form className="color-form">
        <input type='color' value={color} onChange={(e)=>setColor(e.target.value)}/>
        <input type="text" value={color} placeholder='#f15025' onChange={(e)=>setColor(e.target.value)}/>
        <button className='btn' type='submit' style={{background:color}}>submit</button>
      </form>
    </section>
  )
}
export default Form