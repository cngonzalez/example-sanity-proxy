export const initMiddleware = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

export const corsOptionsDelegate = (req, callback) => {
  const corsOptions = { origin: true, methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'] } 
  callback(null, corsOptions) 

}
