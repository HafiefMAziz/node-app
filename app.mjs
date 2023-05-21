import express  from "express"
import expressLayouts from "express-ejs-layouts" //ejs support
const app = express()
const port = 3000

//mensetting agar menggunakan view engine ejs
app.set('view engine', 'ejs');
app.use(expressLayouts); //ejs support

app.get('/', (req, res) => {
    //menampilkan halaman index
    //otomatis root file views
    res.render('index', {
        layout: 'layouts/main-layout', //option dari exprees-ejs-layouts
        title: 'Halaman Index',
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About',
    });
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
    });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})