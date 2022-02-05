import axios from 'axios';
// Game utils Core Functions
// Coded by MDG Dev 

// List of API data
const bearer = 'Bearer kfsnorcjasgppqkkgl1bqebi79rohq';
const clientId = 'olkby41g61usnz0me31lvk88shp7mv';

const headers = {
    "Client-ID": clientId,
    "Authorization": bearer 
}


// Lista de funciones

// getGame
const getGame = async (id) => {
try {
    const url = 'https://api.igdb.com/v4/games'
    const request = `fields: *; where id = ${id};`
    const result = await axios.post(url,request,{
        headers: headers
    })
    return result.data;
    
} catch (error) {
    console.log(error);
}

}

//getMultipleGames 
const getMultipleGames = async (id) => {
    try {
        console.log('id', id);
        const idString= id.map( (element,i) => (element.id)).join();
        console.log('idString', idString);
        const url = 'https://api.igdb.com/v4/games'
        const request = `fields: *; where id = (${idString});`
        const result = await axios.post(url,request,{
            headers: headers
        })
        return result.data;
        
    } catch (error) {
        console.log(error);
    }
}

// getGamesMonth
const getGamesMonth = (month) => { 

}

// addGame
const addGame = (gameId, date, rating) => {

}


export {getGame, getMultipleGames, getGamesMonth, addGame}