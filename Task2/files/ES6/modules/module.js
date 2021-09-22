
// Именованный экспорт
export const color = '#fffff'
export const sum = (a, b) => {
    return a + b;
};

const privateVariable = 35;
// Экспорт по умолчанию
export default {
    log() {
        console.log(privateVariable);
    }
}