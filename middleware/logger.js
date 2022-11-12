/* Credit to Josh Naylor for this simple logger function from class*/
const chalk = require('chalk')

const logger = (req, res, next) => {
  console.log(chalk.white.bgBlue.bold(`${req.method} request hit path ${req.url}`));

  next();
}

export default logger;