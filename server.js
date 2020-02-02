const express = require('express')
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) )

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Angelo',
    })
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
      res.send('Hello data');
    });
 
app.listen(port, ()=> {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})