import PropTypes from 'prop-types'
import { ContextConsumer } from '../../Context/ContextConsumer';

ProjectItem.propTypes = {
  Project: PropTypes.object,
  Index: PropTypes.number
}

export default function ProjectItem({ Project, Index }) {

  const { type, title, image, description, details } = Project;

  const { setOpen, setDetails } = ContextConsumer()

  const viewDetails = () => {
    setDetails(details);
    setTimeout(()=>{
      setOpen(true);
    }, 100)
  }

  return (
    <article className={Index % 2 === 0 ? "project-item-2" : "project-item"}>
      <label className='title-project'>{title}</label>
      <div className="container-project">
        <img src={image.url} alt="proyecto" className='image_project' />
        <div className='content-project'>
          <label className='subtitle-project'>Aplicación <label style={{ color: 'red' }}>{type}</label></label>
          <p>
            {description}
          </p>
          {details.length > 0 && <button onClick={() => { viewDetails() }}>Ver detalles</button>}
        </div>
      </div>
    </article>
  )
}