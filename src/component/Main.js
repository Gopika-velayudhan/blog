import React from "react";
import { Routes,Route, Link } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Blogname from "./BlogName";
import Blog from "./Blog";
import { createContext } from "react";
import { useState } from "react";
import NoMatch1 from "./Nomatch1"; 


export const myContext = createContext()




function Main() {
    const[blogs,setBlogs]=useState([{
        
        
            id:1,
            bloghead: 'The Future of AI in Everyday Life: A Glimpse into Tomorrow',
            blogdata: 'In our fast-evolving digital landscape, artificial intelligence is at the forefront of innovation. In this edition of TechInsider, we delve into the exciting advancements that are shaping the future of AI and its impact on our daily lives. From smart homes to autonomous vehicles, we explore how AI is revolutionizing industries and enhancing the way we interact with technology. Join us on this journey into the future, where the lines between science fiction and reality continue to blur.'
      
          },
          {
            id:2,
            bloghead: 'Exploring the Enchanting Streets of Kyoto',
            blogdata: 'Welcome to another adventure on Wanderlust Chronicles! In our latest escapade, we find ourselves immersed in the captivating beauty of Kyoto, Japan. From the historic temples to the bustling markets, join us as we navigate the narrow streets and discover the hidden gems that make Kyoto a must-visit destination for any avid traveler. Get ready to be enchanted by the rich culture, exquisite cuisine, and the timeless charm of this ancient city'
      }
    

    ])  
    return(
        <div>

            <nav className="navlink">
                <Link to="/">Home</Link>
                <Link to='/create'>Create Blog</Link>
                <Link to='/Blogname'>Blog Name</Link>
                {/* <Link to='/Blog'>Blog</Link> */}
            </nav>
            <myContext.Provider value={[blogs,setBlogs]}>
            <Routes>

               
                <Route path="/" element={<Home />}/>



                <Route path="/create" element={<Create/>}/>
                <Route path="/BlogName" element={<Blogname/>}/>
                <Route path="Blog/:id" element={<Blog/>}/> 
                <Route path="*" element={<NoMatch1/>}/>

                
            </Routes>
            </myContext.Provider>      
        </div>
    )
    
}
export default Main