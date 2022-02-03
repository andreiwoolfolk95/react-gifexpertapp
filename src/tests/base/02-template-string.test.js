import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () =>{

    test('getSaludo debe de retornar Hola Fernando', () =>{
        const nombre = ' Fernando ';

        const saludo = getSaludo(nombre);
        
        expect(saludo).toBe('Hola ' + nombre + '!');

    })
    test('getSaludo debe de retornar Hola Carlos', () =>{

        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos!');

    })

})