const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// enable CORS
// Since we're not serving page from Node, you'll get the following error if CORS isn't "enbaled"
// Failed to load http://localhost:3000/login/:
// No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Hard-Coded for demo
const USER_NAME = 'Admin';
const PASSWORD = 'password';
const USERS = [
                    {
                      firstName: 'Test',
                      lastName: 'TestTest',
                      email: 'test@yahoo.com'
                    },
                    {
                      firstName: 'Foo',
                      lastName:"Bar",
                      email: 'Foobar@yahoo.com'
                    },
                    {
                      firstName: 'Biz',
                      lastName: 'Bazz',
                      email: 'bizbazz@yahoo.com'
                    }
                  ];

app.post('/login', (req, res) => {
  console.log(`${req.body.user_name}, ${req.body.user_password}`);
  if (req.body.user_name === USER_NAME && req.body.user_password === PASSWORD) {
    res.json({ success: true }); 
  } else {
    res.json({ success: false });
  }
});

app.get('/users', (req, res) => {
  res.json({users: USERS});
});

app.listen(3000, () =>{
   console.log('Server running on port 3000.'); 
});
