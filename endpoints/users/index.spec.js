const handler = require('./index')

describe('User', () =>{
  describe('get test', () => {
    it('get execution', async ()=>{
      //mock for axios
      const axios = {
        get: jest.fn().mockResolvedValue({data: 1})
      }
      //request: empty object
      const req = {}
      //response: mock object
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await handler({axios}).get(req, res)
      expect(axios.get.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/users']
      ])
      expect(res.status.mock.calls).toEqual([[200]])
      expect(res.send.mock.calls).toEqual([[1]])
    })
  })

  describe('post test', () => {
    it('post execution', async ()=>{
      //mock for axios
      const axios = {
        post: jest.fn().mockResolvedValue({data: 1})
      }
      //request: object with body
      const req = {
        body: 'info'
      }
      //response: mock object
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }
      await handler({axios}).post(req, res)
      expect(axios.post.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/users', 'info']
      ])
      expect(res.status.mock.calls).toEqual([[201]])
      expect(res.send.mock.calls).toEqual([[1]])
    })
  })

  describe('put test', () => {
    it('put execution', async ()=>{
      //mock for axios
      const axios = {
        put: jest.fn()
      }
      //request: object with body
      const req = {
        params: {id: 123},
        body: 'info'
      }
      //response: mock object
      const res = {
        sendStatus: jest.fn()
      }
      await handler({axios}).put(req, res)
      expect(axios.put.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/users/123', 'info']
      ])
      expect(res.sendStatus.mock.calls).toEqual([[204]])

    })
  })

  describe('delete test', () => {
    it('delete execution', async ()=>{
      //mock for axios
      const axios = {
        delete: jest.fn()
      }
      //request: object with body
      const req = {
        params: {id: 123}
      }
      //response: mock object
      const res = {
        sendStatus: jest.fn()
      }
      await handler({axios}).delete(req, res)
      expect(axios.delete.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/users/123']
      ])
      expect(res.sendStatus.mock.calls).toEqual([[204]])

    })
  })
})