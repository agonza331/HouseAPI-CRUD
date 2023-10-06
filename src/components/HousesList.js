import React from 'react';
import {House} from './House';
import { housesApi } from '../rest/HousesApi.js'; 
import { HOUSES_ENDPOINT } from '../rest/HousesApi.js'; 
import { NewHouseForm } from './NewHouseForm.js'; 
import './HouseList.css';


export class HousesList extends React.Component{
    state = {
        houses : []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    }

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    deleteHouse = async (houseId) => {
        // Send a DELETE request to API
        try {
            await fetch(`${HOUSES_ENDPOINT}/${houseId}`, {
                method: 'DELETE',
            });
            // to update the state by fetching the updated list of houses
            this.fetchHouses();
        } catch (error) {
            console.error('Oops, looks like deleting the house had an issue.', error);
        }
    };

    
    render() {
        return (
          <div className="house-list">
            <h1 className='title'>House list</h1>
            <NewHouseForm />
            {this.state.houses.map((house) => (
              <div className="house-card" key={house._id}>
                <House
                  house={house}
                  key={house._id}
                  updateHouse={this.updateHouse}
                  deleteHouse={this.deleteHouse}
                />
              </div>
            ))}
          </div>
        );
      }
    }
    
    
    
    
    
