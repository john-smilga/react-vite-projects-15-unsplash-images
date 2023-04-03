import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;
console.log(import.meta.env.VITE_API_KEY);
const Images = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h2>Loading...</h2>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h2>There was an error...</h2>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h2>No results found...</h2>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;

        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className='img'
          ></img>
        );
      })}
    </section>
  );
};
export default Images;
