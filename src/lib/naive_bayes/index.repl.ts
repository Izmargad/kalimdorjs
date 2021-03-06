/* tslint:disable */
import { GaussianNB } from './gaussian';

const nb = new GaussianNB();

const X = [[1, 20], [2, 21], [3, 22], [4, 22]];
const y = [1, 0, 1, 0];
nb.fit({ X, y });

const pred = nb.predict({ X: [[1, 20, 2, 12]] });
console.log(pred);
