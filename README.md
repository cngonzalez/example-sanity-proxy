This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It was created to be cloned down or built upon to serve as a proxy for 3rd party API requests from Sanity to other services using an `X-URL` pattern (to better serve the JAMstack community who may not want to keep running servers).

WARNING: For demonstration purposes and easy set-up, its CORS permissions are open to the world. As soon as you know where requests to this service will be coming from, you should lock those down in `utils.js` and `next.config.js`

