import Card from '../Card/Card'

function MainPage() {
  return (
    <>
    <div className="container-fluid my-4 d-flex gap-3 flex-wrap justify-content-evenly">
     <Card title="Upper Case"/>
     <Card title="Lower Case"/>
     <Card title="Edit Text"/>
     </div>
    </>
  )
}

export default MainPage