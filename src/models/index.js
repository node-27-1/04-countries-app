const City = require('./City');
const Country = require('./Country');
const User = require('./User');

Country.hasMany(User);
User.belongsTo(Country);

Country.hasMany(City);
City.belongsTo(Country);
