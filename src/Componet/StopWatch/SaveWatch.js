import React, { useEffect } from "react";

const SaveWatch = (props) => {
    // const useHook = (data) => {
    //     const [boxSave,setBox] = React.useState([])
    //
    //     useEffect(()=>{
    //         setBox(prevState => [...prevState,data])
    //     },[data])
    //
    //     const deleteSave = () =>{
    //         setBox([])
    //     }
    //     return {deleteSave,boxSave}
    // }
    // const {deleteSave,boxSave} = useHook(props.saveData)

    const [boxSave,setBox] = React.useState([])

    useEffect(()=>{
        setBox(prevState => [...prevState,props.saveData])
    },[props.saveData])

    const deleteSave = () =>{
        setBox([])
    }

    return(
        <div>
            <button className={'btn'} onClick={props.save}>save</button>
            <button className={'btn'} onClick={deleteSave}>delete</button>
            { boxSave.map((x,index) => <div key={index}>{x.join(':')}</div> )}
        </div>
    )
}
export default SaveWatch