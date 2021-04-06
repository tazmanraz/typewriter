const sentence = "hello there from lighthouse labs";
let  time = 0;
let index = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    index++;
    if (index === sentence.length) {
      process.stdout.write("\n")
    }
  }, time)
  time += 50;
}