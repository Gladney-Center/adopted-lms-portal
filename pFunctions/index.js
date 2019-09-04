const functions = require('firebase-functions'),
    next = require('next'),
    dev = process.env.NODE_ENV !== 'production',
    nextApp = next({ dev, conf: { distDir: 'next' } }),
    handle = nextApp.getRequestHandler()

exports.portal = functions.https.onRequest((req, res) => {
    return nextApp.prepare().then(() => handle(req, res))
})