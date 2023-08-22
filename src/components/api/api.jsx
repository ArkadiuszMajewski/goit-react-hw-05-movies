const key = '0127585737a1692bc4e9c9e0b9997760';

async function getTrending() {
  const responce = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
  );
  const trending = await responce.json();
  //   console.log(trending);
  return trending;
}
export { getTrending };
