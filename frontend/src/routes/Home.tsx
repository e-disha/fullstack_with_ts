import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import FoodDetails from '../components/FoodDetails';


export const foodQuery = () => {
    return axios.get('http://localhost:9000/api/foods')
}
const Home = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['foods'],
        queryFn: foodQuery
      })
    
    
      if (isLoading) {
        return <div>Foods are loading...</div>
      }
    
      if (isError) {
        return <div>{(error as Error).message}</div>
      }

    return (
        <div className="home">
        {data?.data.map((food:any) => (
            <FoodDetails key={food._id} food={food} />
        ))}
        </div>
    );
}
 
export default Home;