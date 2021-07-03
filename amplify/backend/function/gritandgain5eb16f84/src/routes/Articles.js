const express = require('express');
const { findById, findByIdAndUpdate } = require('../models/Article');
const router = express.Router();

const Article = require('../models/Article');


/*
    This endpoint will serve as a GET all route
    It will find and respond with all article data 
    found inside the database
*/
router.get('/', async ( req, res ) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({message: error})
    } 
})

/*
    GET a single article
    Endpoint will attempt to find the id passed
    to it through the request parameter
    If the article is not present, an error message is sent as 
    a response, otherwise the article found is sent as
    a response
*/
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

/*
    POST a single article
    All data in the request body is saved
    inside the Mongo Database, schema is produced with Mongoose
*/
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
/*
    POST a comment in a specific article
    The comment is pushed into the article comment
    section
*/
router.post('/:id/comment', async (req, res) => {
    // const { username, text } = req.body;
    try {
        if(req.body.comments.username && req.body.comments.text == null) {
            const specificArticle = await Article.findByIdAndUpdate(req.params.id, {
                $push: {
                    comments: req.body.comments
                }
            });
            res.status(200).json(specificArticle);
        }
        const specificArticle = await Article.findByIdAndUpdate(req.params.id, {
            $push: {
                comments: req.body.comments
            }
        }, { new : true });
        
        res.status(200).json(specificArticle);

        
        // res.status(201).json(specificArticle);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
/*
    Update the upvote # inside the DB by 1
*/
router.post('/:id/upvote', async (req, res) => {
    try {
        const upvoteArticle = await Article.findByIdAndUpdate(req.params.id, {
            $set: {
                upvotes: req.body.upvotes 
            }
        })
        res.status(200).send(upvoteArticle);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

/*
    Find a specific article, and update its title,author,articleINFO
    If the article is not found, an error message is presented
*/ 
router.patch('/:id', async ( req , res ) => {
    try {
        if(req.params.id == null) {
            res.status(204).json({message: "article not found"});
        }
        const patchArticle = await Article.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                author: req.body.author,
                articleInfo: req.body.articleInfo
            }
        })
        res.status(200).json(patchArticle);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
/*
    DELETE request, this endpoint will attempt to find an article
    by its id and delete it
*/
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