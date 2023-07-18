import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodForm = () => {
    const [name, setName] = useState('')
    const [macro, setMacro] = useState('')
    const [micro, setMicro] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e:any) => {
        e.preventDefault()

        const food = { name, macro, micro }

        try {
            await axios.post('http://localhost:9000/api/foods/', food, {
              headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'your-rapidapi-key',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
              },
              
            });
          } catch (error) {
            console.error(error);
          }
          navigate('/')
    }


    return (
        <div className="food-form">
             <form className="create" onSubmit={handleSubmit}> 
            <h3>Add a New Food</h3>

            <label>Food Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
            />

            <label>Macrocalories:</label>
            <input 
                type="number" 
                onChange={(e) => setMacro(e.target.value)} 
                value={macro}
            />

            <label>Microcalories:</label>
            <input 
                type="number" 
                onChange={(e) => setMicro(e.target.value)} 
                value={micro} 
            />

            <button>Add Food</button>
            </form>
        </div>
    );
}
 
export default FoodForm;