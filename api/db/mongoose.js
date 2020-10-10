//connecion to mongo db database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/TaskManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to MongoDB successfully');
  })
  .catch((err) => {
    console.log('Error while attempting to connect to MongoDB');
    console.log(err);
  });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
  mongoose,
};
