import './about.css'
import photo from '../../assets/my-photo.jpg'
import Skills from '../skills/skills'
import Employment from '../employment/employment'
import Education from '../edu/edu'

const MainPage = (props) => {
  const text = props.text
  return (
    <><div className='separator'></div>
      <div className="main-info" id='About'>
        <div className="about-me">
          <div className="photo">
            <img src={photo} alt="Maks-photo" className="my-photo" />
          </div>
          <div className="about-me-text-block">
            <h1 className="about-me-h1">{text['about-me']}</h1>
            <p className='about-me-p'>{text['about-me-p']}</p>
            <div className="contacts">
              <a href="https://www.linkedin.com/in/maksim-shirokovskii-826a27279/" className="linked">LinkedIn</a>
              <a href="mailto:maxnozord@gmail.com" className="linked gmail"><b>Gmail</b>: maxnozord@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className='separator'></div>
      <Skills text={text}></Skills>
      <div className='separator'></div>
      <Employment text={text}></Employment>
      <Education text={text}></Education>
    </>
  )
  
}

export default MainPage