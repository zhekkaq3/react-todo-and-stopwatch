import React from "react";
import DisplayWatch from "./DisplayWatch";
import BtnWatch from "./BtnWatch";
import SaveWatch from "./SaveWatch";

const StopWatch = () => {
    const[time,setTime] = React.useState({ms : 0, s : 0, m : 0, h : 0})
    const [interval,setInterv] = React.useState()
    const [status,setStatus] = React.useState(0)

    const start = () =>{
        runWatch();
        setStatus(1)
        setInterv(setInterval(runWatch,10))
    }
    const stop = () =>{
        clearInterval(interval);
        setStatus(2)
    }
    const reset = () =>{
        clearInterval(interval);
        setStatus(0);
        setTime({ms:0 , s:0 , m:0, h:0})
    }
    const resume = () =>{
        start()
    }
    let updateMs = time.ms ; let updateS = time.s ; let updateM = time.m ; let updateH = time.h
    const runWatch = () => {
        if (updateM ===60){
            updateH++;
            updateM = 0;
        }

        if (updateS === 60) {
            updateM++;
            updateS = 0;
        }
        if (updateMs === 100){
            updateS++;
            updateMs = 0;
        }

        updateMs++;
        return setTime({ms:updateMs , s:updateS , m:updateM, h:updateH})
    }

    const [saveData,setData] = React.useState([])
    const save = () => {
        setData([time.h,time.m,time.s,time.ms])
    }



    return (
        <div className="wrapper">
            <h1>STOPWATCH</h1>
            <DisplayWatch time={time}/>
            <BtnWatch resume={resume} reset={reset} stop={stop} status={status} start={start}/>
            <SaveWatch saveData={saveData} save={save}/>
        </div>
    );
}
export default StopWatch