const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  stdin.on ('data', (key) => {
    if (key === '\u0003') {
      proces.exit()
    }
  })
};

module.exports = {setupInput};