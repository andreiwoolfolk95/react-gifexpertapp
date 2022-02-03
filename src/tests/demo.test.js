
describe('Pruebas en el archivo',  () =>{

    test( 'debe de ser true', () => {

        const mensaje = 'Hola mundo';
    
        const mensaje2 = `Hola mundo`;
    
        expect( mensaje).toBe( mensaje2);
    
    })

});

