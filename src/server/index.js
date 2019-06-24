const express = require('express');
const app = express();
const PORT = 4000;
//BodyParser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(PORT, () => { 

    console.log(`App is now listening on port ${PORT}`);
});
