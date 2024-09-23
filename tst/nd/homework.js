const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

(async () => {
  const rl = readline.createInterface({ input, output });
  try {
    const answer = await rl.question('What You AGE? ');
    const ans = Number(answer.trim())
    if(ans >= 1 && ans < 12){
        console.log("Baby");
    }else if(ans >= 13 && ans <= 17){
        console.log("So young");
    }else if(ans >= 18 && ans <= 20){
        console.log("teen");
    }else if(ans >= 21 && ans <= 25){
        console.log("mid teen");
    }else if(ans >= 26 && ans <= 30){
        console.log("tail teen");
    }else if(ans >= 31 && ans <= 40){
        console.log("adult");
    }else if(ans >= 41 && ans <= 50){
        console.log("mid adult");
    }else if(ans >= 51 && ans <= 60){
        console.log("old");
    }else if(ans >= 61 && ans <= 70){
        console.log("so old");
    }else if(ans >= 71 && ans <= 100){
        console.log("very old");
    }else{
        console.log(':)');
    }

  } catch(err) {    
    console.log(`Error: `, err);
  } finally {
    rl.close();
  }
  process.exit(1);
})();