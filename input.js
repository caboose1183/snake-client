let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // console.log ('inside handleUserInput')
  // const stdin = process.stdin;
  // stdin.on('data', (key) => {
  //   console.log('inside stdin')
  let path;

  if (key === '\u0003') {
    process.exit()
  }

  if (key === '\u0077') {       //for w key
    connection.write('Move: up');
  }

  if (key === '\u0061') {      //for a key
    connection.write('Move: left');
  }

  if (key === '\u0073') {      //for s key
    connection.write('Move: down')
  }

  if (key === '\u0064') {      // for d key
    connection.write('Move: right')
  }

  if (key === '\u006A') {      // canned message key j
    connection.write('Say: woot')
  }

  if (key === '\u006B') {      // canned message key k
    connection.write('Say: oops')
  }

  if (key === '\u006C') {      // canned message key l
    connection.write('Say: why')
  }

};

module.exports = setupInput;