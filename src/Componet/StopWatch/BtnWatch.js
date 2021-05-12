import React from "react";

const BtnWatch = (props) => {

    return (
        <div className={'btn-box'}>
            {(props.status === 0) ? <button className={'btn'} onClick={props.start}>start</button> : ''}
            {(props.status === 1) ? <div>
                <button className={'btn'} onClick={props.stop}>stop</button>
                <button className={'btn'} onClick={props.reset}>reset</button>
            </div> : ''}
            {(props.status === 2) ? <div>
                <button className={'btn'} onClick={props.resume}>resume</button>
                <button className={'btn'} onClick={props.reset}>reset</button>
            </div> : ''}

        </div>

    )
}
export default BtnWatch