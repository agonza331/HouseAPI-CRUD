export const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    post = async (newHouse) => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newHouse)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like adding a new house had an issue.', e);
        }
    };
    
    get = async () => {
       try {
        const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
       } catch(e) {
        console.log('Opps, looks like fetchHouses had an issue.', e);
       }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Opps, looks like updating houses had an issue.', e)
        }
    }


}

export const housesApi = new HousesApi();