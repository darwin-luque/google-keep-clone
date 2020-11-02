import React from 'react';

const footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    )
};

export default footer;