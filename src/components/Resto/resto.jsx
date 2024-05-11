
import { useState } from "react";
import Cards from "../Cards/cardList";
import data from "./data"
function Resto(){
const[search,setSearch]=useState("");

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
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />

            <section style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px",margin:"10px"}}>
                {/* <ul>{filterData()}</ul> */}
                {
                     data.filter((iteam)=>(
                        iteam.name.includes(search)
                     ))

                   .map((iteam)=>(
                                <Cards key={iteam._id.$oid} name={iteam.name} address={iteam.address} outcode={iteam.outcode} rating={iteam.rating}/>
                            ))
                }
            </section>
        </div>
    )
}
export default Resto;