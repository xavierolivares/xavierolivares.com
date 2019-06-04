const router = require('express').Router();

//not sure if i will use this yet.

router.use(function (req, res, next) {
    const err = new Error('Not found');
    err.status = 404;
    next(err)
});

module.exports = router;