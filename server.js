const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {    
    try {    
        // response é a resposta do axios, mas eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users'); 
        console.log(data);            

//       return res.json([
//            {name: 'leo'},
//            {name: 'isa'},
//        ])

        return res.json(data);
        
    } catch (error) {
        console.error(error);
    }
});

app.listen('4567');