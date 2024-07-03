export const getMoviesFetch = async () => {
  try {
    const url = "https://server-dev-production.up.railway.app/api/v7.0.7/movies";
    const response = await fetch(url);
    const result = await response.json();

    if (response.status !== 200) throw response;
    return result;
  } catch (error) {
    throw error;
  }
};
