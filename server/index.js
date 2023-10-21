const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get('/html', (req, res) => {
    console.log('Check index.html')
    res.sendFile(__dirname+'/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
