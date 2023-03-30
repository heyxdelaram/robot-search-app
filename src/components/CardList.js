import React from "react";
import Card from './Card'; //default export

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (<Card id={robot.id} name={robot.name} email={robot.email} />);
                })
            }
        </div>
    );
}

export default CardList;