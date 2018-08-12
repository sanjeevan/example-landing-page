import fetch from 'node-fetch'

export const createSubscriber = (email) => {
  const url     = process.env.GATSBY_CREATE_SUBSCRIBER_URL
  const listId  = process.env.GATSBY_LIST_ID

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      listId: listId,
      email: email,
    })
  }).then(response => response.json())
}
