import React,{useState,useEffect} from 'react'

function Fetch2(){
const[posts,setPost]=useState([])
const[loading,setLoading]=useState(true)
const[failing,setFailing]=useState(null)
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
        setPost(data)
        setLoading(false)
    })
    .catch(fail=>{
        setFailing(fail.message)
        setLoading(false)

    })

},[])
return(<div>
    {loading &&<p>Loading...</p>}
    {failing&&<p>{failing}</p>}
   {posts.map(post=>{
    return(<div key={post.id}>

 <h2>{post.title}</h2>
    <p>{post.body}</p>
    </div>)
     
   })}
   
</div>)

}
export default Fetch2