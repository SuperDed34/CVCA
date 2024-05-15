import './work.css'
import Examples from './cards/Examples'

function Work(props) {
  const text = props.text
  const examples = props.text.work.examples
  return (
    <>
      <div className="work-ex">
        <h1 className="h1-work">
          {text.work.h1}
        </h1>
        <div className="examples-wrapper">
          {
            examples.map((val, id) => {
              return (<Examples ex={val} key={id} />)
            })
            }
        </div>
      </div>    
    </>
  )
}

export default Work