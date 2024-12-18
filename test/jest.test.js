/* eslint-disable no-undef */

test('Devo conhecer os principais asseritvas do jest', () => {
   let number = null;
   expect(number).toBeNull();
    number = 10;
   expect(number).not.toBeNull();
   expect(number).toBe(10);
   expect(number).toEqual(10);
   expect(number).toBeGreaterThan(9);
   expect(number).toBeLessThan(11);
})

test('Devo saber trabalhar com objectos', () => {

    const obj = {name: 'Guilherme',email: 'J6QpN@example.com'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Guilherme');
    expect(obj.name).toBe('Guilherme');
    expect(obj).toEqual({ name: 'Guilherme', email: 'J6QpN@example.com' });
})