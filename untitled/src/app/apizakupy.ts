fetch('https://dummyjson.com/test')
.then(res => res.json())
.then(console.log);

fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');

fetch('https://dummyjson.com/RESOURCE/?delay=1000');

fetch('https://dummyjson.com/auth/RESOURCE', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', 
    'Content-Type': 'application/json'
  }, 
})
.then(res => res.json())
.then(console.log);