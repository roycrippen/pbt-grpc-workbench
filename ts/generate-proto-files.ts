import { exec } from 'child_process';

// convert the line endings
exec('sed -i "s/\r$//" protoc.sh', (err, out, sterr) => {
  if (err) console.log(`err: ${err}`);
  if(sterr) console.log(`sterr: ${sterr}`);
  console.log(out);
});

// protoc.sh file should be on root, along with this file
let command = './protoc.sh';

// if a windows process, we must add the 'sh' before it to run the shell
if (process.platform === 'win32') {
  command = `sh ${command}`;
} else {
  command = `bash ${command}`;
}

// execute the protoc
exec(command);
