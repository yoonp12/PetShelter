const { Pet } = require('../models/Pet.model')

// module.exports.index = (req, res) => {
//     res.json({
//         message: "Welcome to the Pet Shelter!"
//      });
// };

module.exports.findAllPets = (req, res) => {
    Pet.find({})
    .then(Pets => res.json(Pets))
    .catch(err => res.json({ message: "Something went wrong with your find all controller", error: err}))
};

module.exports.onePet = (req, res) => {
    const {id} = req.params
    Pet.findOne({ _id:id })
    .then(onePet => res.json(onePet))
    .catch(err => res.json({ message: "Something went wrong with your find one controller", error: err}))
}

module.exports.create = (req, res) => {
    const { petName, petType, petDescription, petSkill_1, petSkill_2, petSkill_3, likes } = req.body
    Pet.create({
        petName,
        petType,
        petDescription,
        petSkill_1,
        petSkill_2,
        petSkill_3,
        likes
    })
    .then(Pet => res.json(Pet))
    .catch(err => res.status(400).json(err))
}

module.exports.updatePet = (req, res) => {
    const {id} = req.params
    Pet.updateOne({ _id: id }, req.body, { new: true })
    .then(updatePet => res.json(updatePet))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    const {id} = req.params
    Pet.deleteOne ({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json({ message: "Something went wrong with your delete controller", error: err}))
}