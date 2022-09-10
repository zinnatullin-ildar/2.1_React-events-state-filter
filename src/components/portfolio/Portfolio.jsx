import React, { useState } from "react";
import ProjectList from '../projectList/ProjectList';
import Toolbar from '../toolbar/Toolbar';
import array from '../Data';
import './main.css';

function Portfolio() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    let [selected, setSelected] = useState("All");

    const onSelectFilter = (e) => {
        setSelected(selected = e.target.dataset.filter);
    };

    let arrayFilter = array.filter(value => {
        return value.category === selected;
    })

    const outputImg = () => {
        return selected === "All" ? array : arrayFilter;
    }

    return (
        <div>
            <Toolbar
                filters={filters}
                selected={selected}
                onSelectFilter={onSelectFilter}
            />
            <ProjectList array={outputImg()} />
        </div>
    );
}

export default Portfolio;
