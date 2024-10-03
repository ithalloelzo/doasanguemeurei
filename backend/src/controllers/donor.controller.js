import { Donor } from "../models/donor.model.js";

export const createDonor = async (req, res)=>{
    const {name, age, weight, bloodType, cep} = req.body;
    if (!name || !bloodType || !age || !weight|| !cep){
        return res.status(400).json({message: 'todos os campos são obrigatórios!'})
    }
    try{
        const endereco = await viacep.buscarendereco(cep)
    }catch{
        
    }
}

export const searchDonor = async (req, res)=>{
    const donorExist = 
}