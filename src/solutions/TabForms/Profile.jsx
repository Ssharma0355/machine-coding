import React from 'react'

const Profile = ({data,setData}) => {
  const {name, age, email} = data;

  const handleDatachange = (e, item)=>{
    setData( prevState => ({
      ...prevState,
      [item]: e.target.value,
    }))
  }
  console.log(data)
  return (
    <div>
      <label>Name :</label>
      <input type="text" onChange={(e)=> handleDatachange(e, "name")}value={name} />
       <label>age :</label>
      <input type="number"  onChange={(e)=> handleDatachange(e, "age")} value={age} />
       <label>email :</label>
      <input type="text"  onChange={(e)=> handleDatachange(e, "email")} value={email} />
    </div>
  )
}

export default Profile
