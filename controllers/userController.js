const  userService  = require('../services/userService');


const signUp = async (req, res) => {
    const { email, password, name, address } = req.body;


  
      if ( !email || !password || !name || !address ) {
          const error = new Error('LACK_OF_KEY')
          error.statusCode = 400
  
          throw error
      }
      
      await userService.signUp(email, password, name, address);
      
      res.status(201).json({ message : "SIGN_UP_SUCCESS"});
  
  }

  module.exports = {
	signUp
}
  
