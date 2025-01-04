process.stdout.write('Welcome to ALX, what is your name?\n');

const inputHandler = (userInput) => {
  const name = userInput.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
};

const exitHandler = () => {
  process.stdout.write('This important software is now closing\n');
};

if (process.stdin.isTTY) {
  process.stdin.once('data', inputHandler);
} else {
  process.stdin.once('data', inputHandler);
  process.on('exit', exitHandler);
}
