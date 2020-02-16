import config from '../config';
import { stringify } from 'query-string';

const urlBuilder = (resource, queryData = {}) => {
  const querystring = stringify({
    api_key: config.apiKey,
    ...queryData
  });
  const base = 'https://api.themoviedb.org/3';

  return `${base}/${resource}?${querystring}`;
};

export const get = async (url, query = {}) => {
  const response = await fetch(urlBuilder(url, query), {
    method: 'get',
    cors: 'none'
  });

  return await response.json();
};

export const discover = async () => {
  const data = await get('discover/movie');

  return data.results;
};
