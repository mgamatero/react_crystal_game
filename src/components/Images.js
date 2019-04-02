import React from 'react';

const Images = (props) => {

   
    return (
        <div>
            <img imageid={props.imageid}
            onClick={props.handleClickedImage}
                src={props.srcAddress}
                className="img-fluid border border-rounded guitarImage"
                alt="guitar"></img>
        </div>
    )
}

export default Images;