import React from "react";
import PropTypes from 'prop-types';
import './main.css';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    const selection = (value) => selected === value ? "filter__btn--active" : "filter__btn--noactive";

    const arrElem = filters.map(value =>
        <button className={"filter__btn " + selection(value)} data-filter={value} onClick={onSelectFilter} key={value}>
            {value}
        </button>
    );

    return (<div className="filter">{arrElem}</div>);
}

Toolbar.propTypes = {
    onSelectedFilter: PropTypes.func,
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired
};

export default Toolbar;
