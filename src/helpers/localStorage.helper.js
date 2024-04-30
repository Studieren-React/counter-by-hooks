export const getCount = () => {
    const count = window.localStorage.getItem('count');

    return count ? Number(count) : 0;
}

export const saveCount = (count) => {
    window.localStorage.setItem('count', count);
}