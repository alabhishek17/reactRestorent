
function Cards({ name, address, outcode, rating }) {
    return (
        <div style={{border:"2px solid black",width:"30%"}}>
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <p>{address}</p>
            <p>{outcode}</p>
        </div>
    )
}
export default Cards