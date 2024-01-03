const sqliteConnection = require('../index');
const createUser = require('./createUsers');

async function migrationsRun(){
    const schemas = [
        createUser
    ].join('');

    sqliteConnection()
        .then(db => db.exec(schemas))
        .catch(error => console.log(error));
}

module.exports = migrationsRun;