// Целью заполнения строки является добавление символов в строку, чтобы она достигла определенной длины
// padStart()

"test".padStart(4); // 'test'
"test".padStart(5); // ' test'
"test".padStart(8); // '    test'
"test".padStart(8, "abcd"); // 'abcdtest'

// padEnd()

"test".padEnd(4); // 'test'
"test".padEnd(5); // 'test '
"test".padEnd(8); // 'test    '
"test".padEnd(8, "abcd"); // 'testabcd'
