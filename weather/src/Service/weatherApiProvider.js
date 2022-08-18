const baseUrl = 'https://weatherapi-com.p.rapidapi.com/';

const commonHeaders = {
  'X-RapidAPI-Key': 'XXXX',
  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
};

const performRequest = async ({ method, path}) => {
  const response = await fetch(baseUrl + path, { headers: commonHeaders, method })
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