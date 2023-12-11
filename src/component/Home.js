import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    return(
        <div className="homepage">

            <h1>Explore Our Blog</h1><br></br>
            <button className="hbtn" onClick={()=>navigate('/create')} style={{width:'200px',borderRadius:'50px 50px',height:'50px'}}>Create</button>
            


        </div>
    )
    
}
export default Home
 