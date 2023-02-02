import React from 'react';
import { useEffect, useState } from 'react';

export const People = () => {

    const searchBar = () => { };
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value);
        console.log('This is the search input: ' + searchInput);
    }

    return (
        <>

            <div>People</div>

            <input
                type="text"
                placeholder='Look up a character'
                onChange={handleChange}
                value={searchInput}
            />

            <button onClick={handleChange}>Submit</button>

        </>
    )
}
