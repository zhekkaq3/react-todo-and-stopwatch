import React from "react";

const DisplayWatch = (props) => {
    // const h =()=> {
    //     if (props.time.h === 0) {
    //         return '';
    //     }else {
    //         return <span className={'display-watch-item'} >{(props.time.h >= 10)?props.time.h : '0' + props.time.h}</span>
    //     }
    // }

    return (
        <div className={'display-watch-list'}>
            {/*{h()}&nbsp;&nbsp;*/}
            <span className={'display-watch-item'} >{(props.time.h >= 10)?props.time.h : '0' + props.time.h}</span>&nbsp;:&nbsp;
            <span className={'display-watch-item'} >{(props.time.m >= 10)?props.time.m : '0' + props.time.m}</span>&nbsp;:&nbsp;
            <span className={'display-watch-item'} >{(props.time.s >= 10)?props.time.s : '0' + props.time.s}</span>&nbsp;:&nbsp;
            <span className={'display-watch-item'} >{(props.time.ms >= 10)?props.time.ms : '0' + props.time.ms}</span>
        </div>
    )
}
export default DisplayWatch;