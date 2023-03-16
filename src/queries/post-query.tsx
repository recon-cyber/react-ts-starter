/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/no-explicit-any
export const PostQuery = async (data: any, URL: any) => {
  const queryResult = await axios.post(URL, data);
  return queryResult.data;
};
