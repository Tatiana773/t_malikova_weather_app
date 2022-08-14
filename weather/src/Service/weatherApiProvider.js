const baseUrl = 'https://weatherapi-com.p.rapidapi.com/';

const commonHeaders = {
    'X-RapidAPI-Key': '0710ea5e90mshca86e4a17dc80b7p1be137jsn4c802ffaca9c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
};

const performRequest = async ({ method, path}) => {
    const response = await fetch(baseUrl + path, { headers: commonHeaders, method })
    console.log('request: ', baseUrl + path)
    console.log('response: ', response)
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
}

export const getData = async (restUrl) => {
    return await performRequest(
      { 
        method: 'GET', 
        path: restUrl,
      }
    );
  }