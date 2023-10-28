import PropTypes from 'prop-types'

function Card(props) {
    
  return (
    <>
    <div className="card" style={{width:'20rem'}}>
  <img src="https://picsum.photos/200" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Go</a>
  </div>
</div>
    </>
  
  )
}

Card.propTypes={
    title:PropTypes.string,
    description:PropTypes.string
}

Card.defaultProps={
    title:"Card Title",
    description:"Card Description"
}

export default Card