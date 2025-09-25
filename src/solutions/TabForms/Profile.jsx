import React from 'react'

const Profile = ({data,setData}) => {
  const {name, age, email} = data;
  console.log(data)
  return (
    <div>
      <label>Name :</label>
      <input type="text" onChange={(e)=> setData(e.target.value)} value={data.name} />
       <label>age :</label>
      <input type="text" onChange={(e)=> setData(e.target.value)} value={data.age} />
       <label>email :</label>
      <input type="text" onChange={(e)=> setData(e.target.value)} value={data.email} />


    </div>
  )
}

export default Profile
