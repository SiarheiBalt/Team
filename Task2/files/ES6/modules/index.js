// фигурные скобки необходимы в случае именованных экспортов, для export default они не нужны

// import logger, {color, sum} from './module'

// logger.log()
// sum(2, 5)
// console.log(color);

// Импорт всего из модуля
import * as Module from './module'

console.log(Module.color);
Module.sum()
Module.default.log()
