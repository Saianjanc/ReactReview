import { useEffect, useState } from "react"

function ChildComponent(props){
    const setData = ()=>{
        const updateField = document.getElementById("updateField").value
        props.props.setdata(updateField)
    }

    const [childData,setChildData] = useState()

    const assign = ()=>setChildData(props.props.data)

    useEffect(assign,[])

    return(
        <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Child Component</h1>
        <span>{childData}</span>
        <input id="updateField" className="p-2 border-2 rounded" defaultValue={props.props.data}/>
        <button onClick={setData} className="w-[80px] h-[30px] bg-[#6298ff] text-white rounded">Update</button>
        </div>
    )
}
export default ChildComponent