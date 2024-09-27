// Create a new user
const User = require("../model/usermodel");


const createUser = async (req, res) => {
  const {firstname, lastname, email, model, password, phone, address} = req.body;
    console.log(firstname, lastname, email, password)
    try {
      const newUser = new User({
        name: firstname,
        lastname:lastname,
        email: email,
        password: password, // Remember to hash passwords in real applications
        phoneNumber: phone,
        address:address,
        profilePicture: 'http://example.com/alice.jpg',
        userType: model,
      });
  
      await newUser.save();
      console.log('User saved:', newUser.displayInfo());
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  module.exports ={createUser};