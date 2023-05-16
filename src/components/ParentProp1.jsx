import React from 'react'
import Props from './Props'

function ParentProp1() {

    let arr=[
        {Name:'siva',age:25,content:'siva split sankarsplit sankar',},
        {Name:'teja',age:25,content:'siva split sankarsplit sankar',},
        {Name:'kumar',age:25,content:'siva split sankarsplit sankar',},
        {Name:'sankar',age:25,content:'siva split sankarsplit sankar',},
        {Name:'siilver',age:25,content:'siva split sankarsplit sankar',},
      
      ]
      
      let a= arr[0].content.split("split");
      
      console.log('====================================');
      console.log(a);
      console.log('====================================');
  return (
    <div>
    
{
arr.map((data,index)=>{
return(
  <Props key={index} Name={data.Name} age={data.age} content={data.content} />
)
})
}

    </div>
  )
}

export default ParentProp1