// const sum = require('./sum');
import {test, expect} from 'vitest';
import sum from './sum';

test('sum() should do basic addition', ()=>{
    // const result = sum(1,2);
    expect(sum(1,2)).toBe(3);
})