const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.con'},
    {id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.con'},
    {id: 3, name: 'Sabila', email: 'sabila@gmail.con'},
]

app.get('/', (req, res) => {
    res.send('Users Management server in running');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server in running on PORT: ${port}`);
})