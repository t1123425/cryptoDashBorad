import React from "react"

interface Props{
    text?:string,
    selectList?:string[]
}
const FormSelect = ({text,selectList}:Props) => {

  return (
    <div>
        <label>
            {text}
        </label>
        <select >
            {
                selectList?.map((e,i)=>{
                    if(i=== 0){
                        return <option key={i} defaultValue={e}>{e}</option>
                    }else{
                        return <option key={i}>{e}</option>
                    }
                    
                })
            }
        </select>
    </div>
  )
}

export default FormSelect;