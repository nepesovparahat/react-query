import React from 'react';

const People = ({person}) => {
    return (
        <div className="people-item">
            <h3>{ person.name }</h3>
            <p>Gender - {person.gender} </p>
            <p>Birth Year - {person.birth_year} </p>
        </div>
    );
}
export default People;