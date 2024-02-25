const KEY = 'user_data';

export const saveUser = user => localStorage.setItem(KEY, JSON.stringify(user));

export const getUser = () => {
    const userString = localStorage.getItem(KEY);
    return userString ? JSON.parse(userString) : null;
};

export const removeUser = () => localStorage.removeItem(KEY);
