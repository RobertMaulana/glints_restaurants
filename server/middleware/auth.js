var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'AADE68ADC556389BE4A79AF788DCA');

const checkAuth = (req, res, next) => {

}

module.exports = checkAuth