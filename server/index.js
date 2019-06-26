const express = require('express');
const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(4000, () => console.log('listeing on port 4000'))