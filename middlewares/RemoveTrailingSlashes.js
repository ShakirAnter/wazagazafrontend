// Middleware to remove trailing slashes from url paths

const removeTrailingSlashes = (req, res, next) => {
    if(req.path !== '/' && req.path.endsWith('/')){
        const query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else{
        next();
    }
}

module.exports = {removeTrailingSlashes};