import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Main";

function Blogname() {
    const [blogs, ]= useContext(myContext)
    const navigate = useNavigate()

    return(
        <div>
             <ul style={{listStyleType:"none"}}>
        {blogs.map((blog) => (
          <li>
            <button onClick={()=>navigate(`/Blog/${blog.id}`)} style={{background:"rgb(83,83,83)",border:"rgb(83,83,83)", alignItems:"center",color:'white' }}><h1>⏩{blog.bloghead}</h1></button>
          </li>
        ))}
      </ul>
            

          
        </div>
    )
    
}
export default  Blogname
