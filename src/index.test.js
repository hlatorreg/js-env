import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Nuestra primera prueba', () => {
    it('deberia pasar', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('Deberia decir hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("HOLA MUNDO");
            done();
            window.close();
        });
    });
});