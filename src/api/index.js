const api = 'https://opentdb.com/api.php?amount=10';

export const useApi = async () => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
};
