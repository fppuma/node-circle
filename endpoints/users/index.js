//handler is a function that returns an object
const handlers = ({axios: httpHelper}) => ({
  get: async (req, res) => {
    const {data} = await httpHelper.get('https://jsonplaceholder.typicode.com/users')
    res.status(200).send(data)
  },
  post: async (req, res) => {
    const {body} = req
    const {data} = await httpHelper.post('https://jsonplaceholder.typicode.com/users', body)
    res.status(201).send(data)
  },
  put: async (req, res) => {
    const {id} = req.params
    const {body} = req
    await httpHelper.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
    res.sendStatus(204)
  },
  delete: async (req, res) => {
    const {id} = req.params
    await httpHelper.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    res.sendStatus(204)
  },
})

module.exports = handlers