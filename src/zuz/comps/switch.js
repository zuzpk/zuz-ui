import React, { useState } from 'react';

function Switch(props) {

    const { onChange, checked, ui } = props;
    const [active, setActive] = useState(checked || false);

    return (
        <button className={"switch rel" + (active ? " switch-on" : "") + (ui ? " switch-" + ui : "")} onClick={evt => {
            onChange && onChange(!active);
            setActive(!active);
        }} />
    );
}

export default Switch;