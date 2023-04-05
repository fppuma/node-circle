const axios = require('axios')

//handler is a function that returns an object
const handlers = ({axios}) => ({
  get: async (req, res) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.status(200).send(data)
  },
  post: () =>{},
  put: () =>{},
  delete: () =>{},
})

module.exports = handlers