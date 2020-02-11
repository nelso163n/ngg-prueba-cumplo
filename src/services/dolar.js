const baseUrl = 'https://api.sbif.cl/api-sbifv3/recursos_api/';
const apikey = '9c84db4d447c80c74961a72245371245cb7ac15f';
const format = 'json';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const headers = {
  host: 'api.sbif.cl'
}

//TODO: Move to util file
export const getUrl = (url) => {
  return `${baseUrl}${url}`;
}

//TODO: Move to util file
export const getUrlWithFormat = (url) => {
  return `${url}?apikey=${apikey}&formato=${format}`;
}

export const getDolarByRange = async (fromPeriod, fromDay, toPeriod, toDay) => {
  console.log('2');
  const messageError = 'error al cargar data';
  try {
    console.log('1');
    const url = getUrlWithFormat(`dolar/periodo/${fromPeriod}/dias_i/${fromDay}/${toPeriod}/dias_f/${toDay}`);  
    const response = await fetch(proxyurl + getUrl(url), {
      method : 'GET',
      headers
    });
    console.log('response:', response);
    const data = await response.json();
    console.log('data:', data);
    return (response.status === 200)? data : messageError;
  } catch (error) {
    console.log(error);
    return messageError;
  }
}