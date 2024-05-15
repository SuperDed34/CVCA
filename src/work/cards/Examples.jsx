import './Examples.css'

function Examples(props) {
  
  const clickHandler = (link) => {
    window.location.href=link

  }

  const { img, heading, description, technologies, link } = props.ex

  return (
    <>
      <div className="ex-card" onClick={()=>clickHandler(link)}>
        <img src={img} alt={heading} className="ex-card-img" />
        <div className="ex-card-text">
          <h3 className="ex-card-heading">{heading}</h3>
          <p className="ex-card-descr">{description}</p>
          <h5>Technologies what I've used here:</h5>
          <ul className="ex-card-tech">
          {Object.keys(technologies).map((val, id) => {
            return (
              <li className="ex-card-item" key={id}><strong>{val}</strong> : {technologies[val]}</li> 
            )
          })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Examples