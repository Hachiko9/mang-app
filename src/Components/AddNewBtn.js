import React from "react";
import './Components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const AddNewBtn = () => {
    return (
        <Link to='add-manga' className="add-btn">
            <FontAwesomeIcon icon={faPlus} />
        </Link>
    )
}

export default AddNewBtn;
