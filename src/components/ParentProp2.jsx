import React from 'react'
import Props from './Props'

function ParentProp2() {

    let arr=[
        {StudentName:'abc',age:25},
        {StudentName:'zfc',age:25},
        {StudentName:'sfc',age:25},
        {StudentName:'rfce',age:25},
        {StudentName:'yellow',age:25},
      
      ]
      
  return (
    <div>
{
arr.map((data,index)=>{
return(
  <Props key={index} Name={data.StudentName} age={data.age} />
)
})
}

    </div>
  )
}

export default ParentProp2