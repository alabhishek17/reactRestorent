
import { useState } from "react";
import Cards from "../Cards/cardList";
import data from "./data"
function Resto(){
const[search,setSearch]=useState("");
const[count,setCount]=useState(0)

// const filterData=()=>{
//     const newArry=data.filter((iteam)=>{
//         iteam.name.includes(search)
//     })
//     return newArry.map((iteam)=>(
//         <Cards key={iteam._id.$oid} name={iteam.name} address={iteam.address} outcode={iteam.outcode} rating={iteam.rating}/>
//     ));
// }

    return(
        <div>
            <input style={{padding:"10px",marginLeft:"150px"}} type="text" placeholder="Search Restorent" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <input style={{marginLeft:"800px",padding:"10px"}} type="number" placeholder="Minimum Rating" value={count} onChange={(e)=>setCount(e.target.value)} />

            <section style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px",margin:"10px"}}>
                {/* <ul>{filterData()}</ul> */}
                {
                     data.filter((iteam)=>(
                        iteam.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        
                     ))

                   .map((iteam)=>(
                                <Cards key={iteam._id.$oid} name={iteam.name} address={iteam.address} outcode={iteam.outcode} rating={iteam.rating} foodName={iteam.type_of_food} icon={iteam.icon} more={iteam.URL}/>
                            ))
                }
            </section>
        </div>
    )
}
export default Resto;