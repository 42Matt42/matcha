const db = require('../models/dbconnection');

module.exports = {
  getAllusers: (req, callback) => {
    const pathname = req._parsedUrl.pathname.split('/');
    const section = pathname[1];
    db.connection.query('SELECT * from ??', [section], function(error, result) {
      if (error) {

        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  addUser: (post, callback) => {
    db.connection.query('INSERT INTO users (username, name, surname, email, password, confirmation) VALUES (?, ?, ?, ?, ?, ?)', post, function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  findOneUser: (field, info, callback) => {
    db.connection.query('SELECT * FROM users WHERE ??=?', [field, info], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  profileComplete: (user_id, callback) => {
    db.connection.query('SELECT count(*) as nb FROM users WHERE id=? and profile_complete = 1', [user_id], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  findOneUserConfirmation: (username, confirmation, callback) => {
    db.connection.query('SELECT count(*) as nb FROM users WHERE username=? and confirmation=?', [username, confirmation], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  findOneUserReset: (username, reset, callback) => {
    db.connection.query('SELECT count(*) as nb FROM users WHERE username=? and password_reset=?', [username, reset], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  findCountUser: (field, info, callback) => {
    db.connection.query('SELECT count(*) as nb FROM users WHERE ??=?', [field, info], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  activate: (bool, confirmation, callback) => {
    db.connection.query('UPDATE users SET active = ? WHERE confirmation = ?', [bool, confirmation], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  updateUser: (id, info, callback) => {
    db.connection.query('INSERT INTO users (bio, birth_date, gender_id, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?) where id =' + id, info, function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  updateFieldUser: (value, field, user_id, callback) => {
    db.connection.query('UPDATE users SET ?? = ? WHERE id =?', [field, value, user_id], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  updateFieldUsername: (value, field, username, callback) => {
    db.connection.query('UPDATE users SET ?? = ? WHERE username =?', [field, value, username], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  updateConfirmation: (string, confirmation, callback) => {
    db.connection.query('UPDATE users SET confirmation = ? WHERE confirmation =?', [string, confirmation], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  updatePassword: (hash, user_id, callback) => {
    db.connection.query('UPDATE users SET password = ? WHERE id =?', [hash, user_id], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
  updatePasswordUsername: (username, hash, callback) => {
    db.connection.query('UPDATE users SET password=? WHERE username=?', [hash, username], function(error, result) {
      if (error) {
        return callback(error, null);
      }

      return callback(error, result);
    });
  },
};
