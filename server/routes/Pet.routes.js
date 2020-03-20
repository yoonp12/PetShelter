const PetController = require('../controllers/Pet.controller');
module.exports = function(app){
    // app.get('/api', PetController.index);
    app.get('/api/pets/', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.onePet);
    app.post('/api/pets/new', PetController.create);
    app.put('/api/pets/edit/:id', PetController.updatePet);
    app.delete('/api/pets/delete/:id', PetController.deletePet);
}