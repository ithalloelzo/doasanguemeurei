const viacep = require("../service/viacep")

let donors = [];


exports.registerDonor = async (req, res)=>{
    const {name, age, weight, bloodType, cep} = req.body;
    if (!name || !bloodType || !age || !weight|| !cep){
        return res.status(400).json({message: 'todos os campos são obrigatórios!'})
    }
    try{
        const endereco = await viacep.buscarendereco(cep)
    }
}