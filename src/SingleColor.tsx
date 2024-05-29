import { toast } from "react-toastify"
const SingleColor = ({index,color}) => {
  const {hex,weight} = color
  const saveToClipbooard = async () =>{
    if(navigator.clipboard){
      try{
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('successfully copied to clipboard')
      }
      catch(error){
        toast.error('failed to copy to clipboard')
      }
    }
    else{
      toast.error('clipboard access is not available')
    }
  }
  return (
    <article className={index > 10 ? 'color color-light' : 'color'}
    style={{background:`#${hex}`}}>
      <div>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hex}</p>
      </div>
      <div>
        <button className='btn' style={{background:'black',color:'white'}} onClick={saveToClipbooard}>copy</button>
      </div>
    </article>
  )
}
export default SingleColor