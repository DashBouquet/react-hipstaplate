import * as fetch from 'isomorphic-fetch';
import { createQueryParams } from '../../utils/createQueryParams';

const TS = '1502313054613';
const KEY = '5f16d2158197f2e9bf01f8339f003b0d';
const HASH = '008af404ca3d25bbff90d82ab2939413';

const ApiQuery = async (endpoint: string, params: object) => {
  const parameters: string = createQueryParams(params);
  const query: Response = await fetch(
    `https://gateway.marvel.com/v1/public/${endpoint}?ts=${TS}&apikey=${KEY}&hash=${HASH}&${parameters}`
  );

  try {
    return query.json();
  } catch (error) {
    console.log(error);
  }
};

const marvel = async (_, { endpoint, params = {} }) => {
  const { data } = await ApiQuery(endpoint, params);

  try {
    return data;
  } catch (error) {
    console.log('err: ', error);
  }
};

export { marvel };
