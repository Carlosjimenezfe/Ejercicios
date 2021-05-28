import { hello } from './hello-world';

describe('Hola Mundo', () => {
  test('Say Hi!', () => {
    expect(hello()).toEqual('Hola, Mundo!');
  });
});
