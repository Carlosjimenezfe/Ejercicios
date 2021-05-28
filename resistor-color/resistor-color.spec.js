import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {

    describe('Black',()=>{
      test('black LowerCase', () => {
        expect(colorCode('black')).toEqual(0);
      });
      test('Black UpperCase', () => {
        expect(colorCode('Black')).toEqual(0);
      });
    });
  
    describe('White',()=>{
      test('White LowerCase', () => {
        expect(colorCode('white')).toEqual(9);
      });
      test('White UpperCase', () => {
        expect(colorCode('White')).toEqual(9);
      });

    });

    describe('Brown',()=>{

      test('Brown LowerCase', () => {
        expect(colorCode('brown')).toEqual(1);
      });
      test('Brown UpperCase', () => {
        expect(colorCode('Brown')).toEqual(1);
      });

    });

  });

    

   
  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
 
  });
});

