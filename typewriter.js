const sentence = "hello there from lighthouse labs";

let time = 0;

//TIMEOUT WITHOUT STAGGERING THE LETTERS

// setTimeout(() => {
//   process.stdout.write(sentence);
// }, 3000)

for (let i = 0; i < sentence.length; i++) {
  
  setTimeout(() => {
    process.stdout.write(sentence[i]);

    if (i === sentence.length - 1) {
      process.stdout.write("\n");
    }

  },time);

  time += 50;
}