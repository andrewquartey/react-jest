let __value = 42;
const isomorphicFetch = jest.fn(()=> __value);
isomorphicFetch.__setValue = v => {return __value = v};

export default isomorphicFetch;
