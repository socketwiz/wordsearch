
function urlNotFound() {
    return function raiseUrlNotFoundError(req, res) {
        const httpErrorCode = 404; // not found
        const options = {
            'root': __dirname + '../../../frontend/public'
        };

        res.status(httpErrorCode).sendFile('404.html', options, (error) => {
            if (error) {
                console.error(error); // eslint-disable-line no-console
                res.status(httpErrorCode).end();
            }
        });
    };
}

module.exports = urlNotFound;
