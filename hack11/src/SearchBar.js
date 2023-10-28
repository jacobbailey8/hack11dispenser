import React, { useState } from 'react';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState(''); // State to store the input value

    const handleInputChange = (event) => {
        // Update the state with the input value as the user types
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        // Perform the search action here, e.g., save the searchQuery to a state variable or send it to an API
        console.log('Search Query:', searchQuery);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button className='bg-gray-500 p-2 rounded-md' onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar;
