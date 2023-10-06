import React from "react";
import { NewRoomForm } from './NewRoomForm.js';
import { NewHouseForm } from "./NewHouseForm.js";

export const House = (props) => {
    const { house, updateHouse, deleteHouse, newHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    };

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room] });

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
    

    return (
        <div>
            <h2>{house.name}</h2>
            <button onClick={() => deleteHouse(house._id)}>Delete House</button>
            {rooms()}
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};
