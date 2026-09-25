export const API_URL = 'https://api.weatherapi.com/v1';
export const KEY = 'f313994b9ee548cb96e135147222507';


export const getOptions = () => {
    return {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    }
}