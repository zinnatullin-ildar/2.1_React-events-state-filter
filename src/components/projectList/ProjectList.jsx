import React from "react";
import PropTypes from 'prop-types';
import './main.css';

function ProjectList(props) {
    const { array } = props;
    let id = 1
    const arrayElem = array.map(value =>
        <img className="img" src={value.img} data-filter={value.category} key={++id} alt="" />
    );

    return (
        <div className="filter-img">{arrayElem}</div>
    )
}

ProjectList.propTypes = {
    arrayElem: PropTypes.array
};

export default ProjectList;
