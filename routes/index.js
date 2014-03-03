/*
 * Export modules for specific pages
 */

// List of articles title
exports.listArticles = function(db) {
    return function(req, res){
        db.find({}, function (error, docs) {
            if ( error ) {
                return new Error('Error trying to get list of article', error);
            }

            res.render('index', {
                    title: 'Kaeljs static blog/site generator',
                    page: 'index',
                    articles: docs
                }
            );

        });
    }
}

// Article post
exports.article = function(db) {
    return function(req, res){
        var pagePath = req.param('title');

        db.find({}, function (error, docs) {
            if ( error ) {
                return new Error('Error trying to get list of article', error);
            }

            db.findOne({ path: pagePath }, function (error, doc) {
                if ( error ) {
                    return new Error('Error trying to get article', error);
                }

                res.render('blog', {
                        title: doc.title,
                        page: 'internal',
                        content: doc,
                        articles: docs
                    }
                );
            });

        });
    }
}

// About page
exports.about = function(db) {
    return function(req, res){
        db.find({}, function (error, docs) {
            if ( error ) {
                return new Error('Error trying to get list of article', error);
            }

            res.render('about', {
                    title: 'About page title',
                    page: 'internal',
                    articles: docs
                }
            );

        });
    }
}

// Lab page
exports.lab = function(db) {
    return function(req, res){
        db.find({}, function (error, docs) {
            if ( error ) {
                return new Error('Error trying to get list of article', error);
            }

            res.render('lab', {
                    title: 'Lab page title',
                    page: 'internal',
                    articles: docs
                }
            );

        });
    }
}