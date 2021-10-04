console.log('A'.repeat(3)); // AAA
console.log('-4'.codePointAt()); // 45

'test'.padStart(8); // '    test'
'test'.padStart(8, 'abcd'); // 'abcdtest'

'test'.padEnd(8); // 'test    '
'test'.padEnd(8, 'abcd'); // 'testabcd'
'test'.padEnd(10, '*'); // 'test******'

'    Hello everyone'.greeting.trimStart(); // "Hello everyone"
'Hello world    '.greeting.trimEnd(); // "Hello world"

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?

const regex = /Dog/gi;
console.log(p.replaceAll(regex, 'ferret'));
// The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?
