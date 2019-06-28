const fs = require('fs');
const chalk = require('chalk');
const json = require('../src/RULES.js');
let content = `# any-rule 
正则大全
https://any86.github.io/any-rule/
`;
json.forEach(({title, rule})=>{
    content+= `\r\n## ${title}\r\n`;
    content+= `\`\`\`javascript\r\n`;
    content+= `${rule}\r\n\`\`\`\r\n`;
});
fs.writeFileSync('./README.md',content,'utf-8');
console.log(chalk.green('生成完毕'));