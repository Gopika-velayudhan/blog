import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Main";








function Blog() {

    const [blogs, ] = useContext(myContext)

    const params = useParams()

    const blogid = params.id
    
    
    return(
        <div className="display">
            <h1 style={{textAlign: "center",text : 'bold', color:"grey",fontSize:"20px"}}> {blogs[blogid-1].bloghead}</h1><br/><br/>
            <p style={{textAlign : "center",fontFamily:"sansserif",color:'white'}}> {blogs[blogid-1].blogdata} </p>
        </div>
    )
    
}
export default Blog