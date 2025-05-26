fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 60,
  }),
  credentials: 'include' 
})
.then(res => res.json())
.then(console.log);

fetch('https://dummyjson.com/test')
.then(res => res.json())
.then(console.log);

fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3');

fetch('https://dummyjson.com/RESOURCE/?delay=1000');

fetch('https://dummyjson.com/auth/RESOURCE', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer TOKEN', 
    'Content-Type': 'application/json'
  }, 
})
.then(res => res.json())
.then(console.log);

fetch('https://dummyjson.com/auth/refresh', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    refreshToken: 'REFR',
    expiresInMins: 60, 
  }),
  credentials: 'include' 
})
.then(res => res.json())
.then(console.log);
