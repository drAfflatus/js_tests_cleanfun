import health from '../health';

test('healthy 1', () => {
    expect(health({name: 'Маг', health: 90})).toBe("healthy");
});

test('healthy 2', () => {
    expect(health({name: 'Маг', health: 51})).toBe("healthy");
});

test('wounded 1', () => {
    expect(health({name: 'Маг', health: 50})).toBe("wounded");
});

test('wounded 2', () => {
    expect(health({name: 'Маг', health: 30})).toBe("wounded");
});

test('wounded 3', () => {
    expect(health({name: 'Маг', health: 15})).toBe("wounded");
});

test('critical 1', () => {
    expect(health({name: 'Маг', health: 14})).toBe("critical");
});

test('critical 2', () => {
    expect(health({name: 'Маг', health: 0})).toBe("critical");
});

test('critical 3', () => {
    expect(health({name: 'Маг', health: -10})).toBe("");
});

test('critical 4', () => {
    expect(health({})).toBe("");
});
