const postReq = (endpoint, body) => fetch(endpoint, {
    method: 'POST',
    body,
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json());

const getReq = (endpoint) => fetch(endpoint).then(res => res.json())

export { postReq, getReq };
