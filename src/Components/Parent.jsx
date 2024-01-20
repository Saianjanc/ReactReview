import { useState } from "react"
import {Visibility, VisibilityOff} from "@mui/icons-material"
import ChildComponent from "./ChildComponent"

function Parent(){
    const [showPassword,setShowPassword] = useState(false)
    const [inputData,setInputData] = useState("")

    const setData = ()=>{
        const inputField = document.getElementById("inputField").value
        setInputData(inputField)
    }

    function updateData(newData) {
        setInputData(newData)
    }
    return(
        <div className="w-full h-[600px] flex flex-col justify-center items-center gap-10">
            <div className="w-[50%] p-10 flex flex-col bg-[#fb9494] gap-5 rounded">
            <h1 className="text-2xl font-bold">Parent Component</h1>
            <div>
            <input className="p-2 w-[80%] bg-transparent rounded border-2 border-black" id="inputField" type={showPassword?"text":"password"}/>
            <button className="w-[50px]" onClick={()=>setShowPassword(prevState=>!prevState)}>
                {showPassword?<Visibility/>:<VisibilityOff/>}
            </button>
            </div>
            <button onClick={setData} className="w-[80px] h-[30px] bg-[#6298ff] text-white rounded">Submit</button>
            <span>{inputData}</span>
            </div>
            {inputData?
            <div className="w-[50%]">
                <ChildComponent props={{data:inputData,setdata:updateData}}/>
            </div>:<></>}
        </div>
    )
}
export default Parent