import foodModel from '../models/foodModel'

//GET ALL FOODS
export const getAllFoods = async(req:any, res:any) => {
    const food = await foodModel.find({}).sort({createdAt: -1})

    res.status(200).json(food)
}

//GET A SINGLE FOOD
export const getSigleFood = async(req:any, res:any) => {
    const { id } = req.params

    const food = await foodModel.findById(id)
    if(!food){
        return res.status(404).json({ error: 'No such food existst in database'})
    }
    res.status(200).json(food)
}


//CREATE NEW FOOD
export const createFood = async(req: any, res: any) => {
    const { name, macro, micro } = req.body;
    try {
        const food = await foodModel.create({ name, macro, micro });
        res.status(200).json(food);
    } catch (error:any) {
        res.status(400).json({ error:error.message})
    }
}

//DELETE FOOD
export const deleteFood = async(req:any, res:any) => {
    const { id } = req.params

    const food = await foodModel.findOneAndDelete({ _id: id})
    if(!food){
        return res.status(404).json({ error: 'No such food existst in database'})
    }
    res.status(200).json(food)
}


//UPDATE FOOD
export const updateFood = async(req:any, res:any) => {
    const { id } = req.params

    const food = await foodModel.findByIdAndUpdate({ _id: id}, {
        ...req.body
    })
    if(!food){
        return res.status(404).json({ error: 'No such food existst in database'})
    }
    res.status(200).json(food)
}