import React from 'react'

const Interset = ({data, setData}) => {
  const {interset} = data
  return (
    <div className='interset-conatiner'>
      <label htmlFor="">
        Coding
        <input type="checkbox" name="coding" checked={interset.includes("coding")} />
      </label>
       <label htmlFor="">
        DSA
        <input type="checkbox" name="" id="" />
      </label>
    </div>
  )
}

export default Interset
