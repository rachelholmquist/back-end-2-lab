const houses = require('./db.json');
const globalId = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    deleteHouse: (req, res) => {
        const { id }= req.params;
        for(let i = 0; i < houses.length; i++){
            if(houses[i].id === +id){
                houses.splice(i, 1);
                return res.status(200).send(houses);
            }
        }
        res.status(400).send(houses);
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;
        houses.push({
            address,
            price,
            imageURL,
            id: globalId,
        })
        globalId++
        res.status(200).send(houses);
    },
    updateHouse: () => {},
}