import PropTypes from 'prop-types'

function Card(props) {
    
  return (
    <>
    <div className="card" style={{width:'20rem'}}>
  <img src={props.cardimage} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.download_link} target="_blank" rel="noreferrer" className="btn btn-primary">{props.card_btn}</a>
  </div>
</div>
    </>
  
  )
}

Card.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
    cardimage:PropTypes.string,
    download_link:PropTypes.string,
    card_btn:PropTypes.string
}

Card.defaultProps={
    title:"Card Title",
    description:"Card Description",
    cardimage:"https://picsum.photos/200",
    card_btn:"Card Button"
}

export default Card