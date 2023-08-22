export const ListOfTrending = ({ trending }) => {
  //   console.log(trending);

  return (
    <ul>
      {trending.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};
