export const parseUrl = (url = '') => (url.endsWith('/') ? url.slice(0, -1) : url);
