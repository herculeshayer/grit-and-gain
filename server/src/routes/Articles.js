const express = require('express');
const { find, findByIdAndUpdate } = require('../model/Article');
const router = express.Router();

const Article = require('../model/Article');

//GetOne
router.get('/:id', async ( req , res ) => {
    // const name = req.params.id;
    // res.json({message: name});
    try {
        let article = await Article.findById(req.params.id);
        if(article == null) {
            return res.status(404).json({message : "Article doesn't exist"});
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

})

//Get All
router.get('/', async ( req , res ) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Create Article
router.post('/', ( req , res ) => {
    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        upvotes: req.body.upvotes,
        comments: req.body.comments,
        data: req.body.data
    })
    try {
        const newArticle = article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: 'there was an error', error })
    }
})
//Get Comment
router.get('/:id/comment', ( req , res ) => {
    
})
//Create Comment
router.post('/:id/comment', ( req , res ) => {

})
//Get Upvote
router.get('/:id/upvote', ( req , res ) => {
    
})
//Create Upvote
router.post('/:id/upvote', ( req , res ) => {
    
})

//Update One
router.patch('/:id', async ( req , res ) => {

    // if(req.body.title != null) {
    //     res.body.title = req.body.title;
    // }

    try {
        if(req.params.id == null) {
            return res.status(204).json({message: "not found"});
        }
        let article = await Article.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        });
        // article.save();
        res.status(200).json(article);
    } catch (error) {
        res.status(204).json({message: error.message});
    }
})

//Delete One
router.delete('/:id', async ( req , res ) => {
    try {
        let article = await Article.findByIdAndDelete(req.params.id);
        if( req.params.id == null ) {
            return res.status(204).json({message: "not found"});
        }
        res.status(200).json(article);
    } catch (error) {   
        res.status(500).json({message: error.message});
    }

})

//middleware


module.exports = router;

