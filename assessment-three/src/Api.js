import fetch from 'isomorphic-fetch'

export function fetchAllTasks(endpoint, options)  {
  return fetch(endpoint, options)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json()
    })
}
