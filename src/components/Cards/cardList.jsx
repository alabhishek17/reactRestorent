import { MdLocationOn } from "react-icons/md";
function Cards({ name, address, outcode, rating, icon, foodName, more }) {
    let stars=["⭐","⭐","⭐","⭐","⭐"];
    let employesStars=[];
    for(let i=0;i<rating;i++){
        employesStars.push(stars[i]);
    }
    return (
        <div style={{ width: "30%",boxShadow:"0px 1px 1px 0px" }}>
            <h3>{name}</h3>
            <h4>{employesStars}</h4>
            <p><MdLocationOn />{address}</p>
            <p>{outcode}</p>
            <section style={{ backgroundColor: "#F3F4F5", padding: "10px" }}>

                <div style={{ display: "flex",marginBottom:"10px" }}>
                    <img src={icon} alt="" style={{ width: "50px" }} />
                    <p>{foodName}</p>
                </div>
                <a href={more}>Visit Menu</a>
            </section>
        </div>
    )
}
export default Cards