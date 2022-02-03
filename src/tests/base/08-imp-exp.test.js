import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('pruebas en funciones de heros', () => {

    test('debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById (id);
        const heroeData = heroes.find(h => h.id ===id );

        expect ( heroe ).toEqual(heroeData);

    })
    test('debe retornar undefined si heroe no existe', () => {

        const id = 6;
        const heroe = getHeroeById (id);

        expect ( heroe ).toBe( undefined );

    })
    test('Debe retornar heroes de DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeowner = heroes.filter(h => h.owner ===owner );
       
        expect ( heroe ).toEqual( heroeowner );

    })
    test('Debe retornar heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect ( heroes.length ).toBe( 2 );

    })





})