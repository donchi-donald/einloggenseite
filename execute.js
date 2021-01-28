

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
  var exec = require('child_process').exec;
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}
sh('x-www-browser "http://localhost:9001"');

async function main() {
  let { stdout } = await sh('cat pass');

  let  pass;
  for (let line of stdout.split('\n')) {
    pass = line;

    break;
  }
  console.log(pass);

}








