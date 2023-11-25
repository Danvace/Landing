import React from "react";
import {Button} from "antd";

const ShowButton = (props) => {
    return (
        <div>
            <Button onClick={props.onClick}>Show More</Button>
        </div>
    )
}

export default ShowButton;