
const mongoose = require('mongoose');

const db = () => {
   
   try {
      mongoose.connect('mongodb+srv://misiontic2022_1:JE5SsY2wnxIs6gIG@cluster0.vlrbq.mongodb.net/ciclo3_2021?retryWrites=true&w=majority')  
      console.log("La base de datos está conectada")
   } catch (error){
      throw new Error('Error al inicializar DB');
      console.log("Error db", error);
   }  
      
   }  

   /*.then(data => console.log("La base de datos está conectada"))
    .catch(err => console.log("Error db", err));*/

module.exports = {
      db
  }

