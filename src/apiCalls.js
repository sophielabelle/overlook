import resolve from "./scripts";

const fetchData = (info) => {
  return fetch(`http://localhost:3001/api/v1/${info}`)
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error('Error');
    }
  })
  .catch(error => console.log(`Issue at: ${error}`))
}

const resolveData = () => {
  return Promise.all([
    fetchData('customers'), fetchData('rooms'), fetchData('bookings')
  ])
  .catch(err => console.log('in resolve',err));
}

const postData = (saveData) => {
  console.log(saveData)
  fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify(saveData),
    headers: {
      'Content-Type': 'application/json'
    }  
  })
  .then(response => {
    if(!response.ok) {
      throw new Error(response.status);
    } else {
      resolve();
    }
  })
  .catch(err => console.log('Error at:', err));
}

export {resolveData, postData};