import { login, logout } from '../../actions/auth';

test('should generate login action obbject', () => {
    const uid = 'abc123';
    const action = login('abc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action obbject', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});