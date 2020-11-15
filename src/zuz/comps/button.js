import React from 'react';

function Button(props) {

    const { label, type, onClick, icon } = props;

    return (
        <button className={"button flex aic button-" + (type ? type : "default")} onClick={onClick}>
            {icon && <div className={"ico " + icon} />}
            <div className="label font">
                {label}
            </div>
        </button>
    );
}

export default Button;