import React from 'react';
import './Holiday.css';

const Holiday = ({ holiday }) => {
    const { title, date, notes, bunting } = holiday;
    return (
        <div className="holiday">
            <h3>{title}</h3>
            <p>Date: {date}</p>
            {
                notes && <p>notes: {notes}</p>
            }
            <p>bunting: {String(bunting)}</p>
        </div>
    );
};

export default Holiday;