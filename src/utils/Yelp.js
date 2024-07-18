const apiKey = process.env.REACT_APP_YELP_API_KEY;
const baseUrl = 'https://api.yelp.com/v3/businesses/search';


const getBusinesses = async (term, location, sort) => {
    console.log(apiKey);
    const params = `?term=${term}&location=${location}&sort_by=${sort}`;
    const urlToFetch = baseUrl + params;

    try{
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            throw new Error(`Encountered an error: ${response.status}`);
        }
    } catch(error) {
        console.log(error);
    }
}

export {getBusinesses};