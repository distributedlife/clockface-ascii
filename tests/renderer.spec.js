'use strict';

var expect = require('chai').expect;
var renderer = require('..');

describe('a clock face', () => {
    describe('it should render the intervals', () => {
        const expected =
`        o
    o       o

 o             o

h               o

 o             o

    m       o
        o`;

        expect(renderer('ooooooomohoo'.split(''))).to.equal(expected);
     });
 });