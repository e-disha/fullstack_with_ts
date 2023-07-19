import axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow"

interface Food {
    _id: string;
    name: string;
    macro: number;
    micro: number;
    createdAt: string;
  }

const FoodDetails = ({ food }: { food: Food }) => {
    const deleteFood = () => {
        const id = food._id
            axios.delete(`http://localhost:9000/api/foods/${id}`)
                .then(() => {
                    console.log('Food has been deleted')
                    window.location.reload()
                })
                .catch(err => console.log(err))
    }

    return (
        <div className="food-details" key={food._id}>
            <h4>{food.name}</h4>
            <p><strong>Macronutrients: </strong>{food.macro}</p>
            <p><strong>Micronutrients: </strong>{food.micro}</p>
            <p>{formatDistanceToNow(new Date(food.createdAt), { addSuffix: true })}</p>
            <span onClick={deleteFood}>Delete</span>
        </div>
    );
}

export default FoodDetails;