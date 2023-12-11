import React, { useContext,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Main";





function Create() {
    const [blogs,setBlogs] = useContext(myContext)
    const BlogHeading = useRef(null)
    const BlogData = useRef(null)
    const navigate = useNavigate()


    const handleClick =()=>{
        BlogHeading && BlogData && setBlogs([...blogs,{
            id:blogs.length + 1,
            bloghead:BlogHeading.current.value,
            blogdata:BlogData.current.value

        }])
        BlogHeading.current.value = ''
        BlogData.current.value=''
        window.alert('Blog is successfully posted')
        
    }
    


    return(
        <>
        <div className="create">
            <h1 style={{text : 'bold',textAlign : 'center'}}> Create Your Own Blog</h1>
            <label style={{text : 'bold'}}>Blog name</label><br/><br/>
            <input type="text" ref={BlogHeading} style={{ width:'30%',height:'4vh'}}></input><br/><br/>
            <label style={{marginTop: '25%', textAlign : 'center'}}>Create Blog Content</label><br/><br/>
            <textarea style={{padding : "50px 50px",width:'90%',height:'30vh'} } ref={BlogData}></textarea><br></br>
            <div className="btn">
            <button className="btn1" onClick={handleClick} style={{alignItems : "center"}}>Post blog</button>
             <button className="btn2" onClick={()=>navigate('/BlogName') } style={{alignItems: "center"}}>see blog</button>
            
            </div>
           
        


            




        
        </div>
        
        </>
        
    )
    
}
export default Create
 