export default function Boxes({ind, toggle, onClick, img}){

  return (
    <div className="boxes" onClick={onClick}>

      {img && <img src={img} alt="" />}

    </div>
  )
}