import React from 'react'
import { useLocation } from "react-router-dom";

const Home = () => {

    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const name = query.get('name')
    const color = query.get('color')
    const bg = query.get('bg')

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="20"
            viewBox="0 0 100 20"
        >
            <rect width="100" height="20" rx="5" fill={bg}/>
            <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill={color}
            >
                {name}
            </text>
        </svg>
    )
}

export default Home