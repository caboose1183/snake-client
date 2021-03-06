const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on ('connect', () => {
    console.log ('Successfully connected to game server')
    conn.write ('Name: SID')
  })

  return conn;
};

module.exports = connect;