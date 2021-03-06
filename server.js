const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()
mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => { 
    
    const articles =[{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test Description'
    },
    {
        title: 'Test Article 2',
        createdAt: Date.now(),
        description: 'Test Description'
        
    }
]

res.render('articles/index' , {articles: articles})
})

app.use('/articles', articleRouter )

app.listen(8080)



