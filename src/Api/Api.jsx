import React ,{useState,useEffect} from 'react'
import Card from './Card'

const Api = () => {
    const [users, setUsers] = useState([])
    const fetchUserData = () => {
        fetch("https://api.github.com/users")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    
  return (
    <>
        <div className=' container'>
            {users.length > 0 && (
                <ul>
                {users.map(user => (
                    <Card key={user.id} name={user.login} img={user.avatar_url}/>
                ))}
                </ul>
            )}
        </div>
    </>
  )
}

export default Api