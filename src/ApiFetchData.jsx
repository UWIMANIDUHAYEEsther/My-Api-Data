import React,{useState,useEffect} from 'react'

function ApiFetchData(){
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            setUsers(data)
            setLoading(false)
        })
        .catch(error=>{
            setError(error.message)
            setLoading(false)
        })

    },[])


    return(<div>
{loading && <p>Loading...</p>}
{error &&<p>{error}</p>}
{users.map(user=>(
    <p key={user.id}>{user.name}</p>
 ))}
    </div>)

    
}
export default ApiFetchData