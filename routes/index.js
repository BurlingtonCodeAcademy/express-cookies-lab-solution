var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let theme = '';
  const type = req.cookies.theme;
  if (type) {
    theme = type;
  }
  res.render('index', {
    title: 'Express Cookies',
    subtitle: 'Cookies Lab',
    theme: theme,
  });
});

router.get('/:mode', (req, res, next) => {
  const { mode } = req.params;

  if (['dark-mode', 'light-mode'].includes(mode)) {
    const [type, _suffix] = mode.split('-');

    res.cookie('theme', type, {
      httpOnly: false,
      expires: new Date(Date.now() + 300000),
    });
  }
  res.redirect(301, '/');
});

module.exports = router;
