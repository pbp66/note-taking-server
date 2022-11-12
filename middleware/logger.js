/* Credit to Josh Naylor for this simple logger function from class*/
import chalk from "chalk";

const logger = (req, res, next) => {
    console.log(chalk.white.bgBlue.bold(`${req.method} request hit path ${req.url}`));

    next();
}

export default logger;