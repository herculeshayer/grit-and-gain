const express = require('express');
const router = express.Router();

const Article = require('../models/Article');


//Get All
router.get('/', async ( req, res ) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({message: error})
    } 
})

//Get One
router.get('/:id', async ( req , res ) => {
    const name = req.params.id;
    try {
        if(name == null) {
            res.status(404).json({message: "article not found"})
        }
        const singleArticle = await Article.findById(name);
        res.status(200).json(singleArticle)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Post One
router.post('/', (req, res) => {
    const reqArticle = new Article({
        title: req.body.title,
        author: req.body.author,
        articleInfo: req.body.articleInfo,
        comments: req.body.comments,
        upvotes: req.body.upvotes
    })
    try {
        const newArticle = reqArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

//Patch One
router.patch('/:id', async ( req , res ) => {
    try {
        if(req.params.id == null) {
            res.status(204).json({message: "article not found"});
        }
        const patchArticle = await Article.findByIdAndUpdate(req.params.id, res.body())
        res.status(200).json(patchArticle);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//Delete One
router.delete('/:id', async ( req , res ) => {

    try {
        if(req.params.id == null) {
            res.status(404).json({message: "invalid article id"})
        }
        const deleteArticle = await Article.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteArticle);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;