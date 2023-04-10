export const showMessage (req, res) =>{ 
    res.status(200).send('Here is a message :  ${req.params.message}');
  };