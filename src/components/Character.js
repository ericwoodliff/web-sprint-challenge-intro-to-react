import React from 'react';

// Write your Character component here

const Character = ({ characters, isRendering }) => {
    return isRendering ? <p>Rendering!</p> : <section className="characters">
        {characters.map(item => (
            <h2>{item.name}</h2>
        ))};

    </section>
}

export default Character