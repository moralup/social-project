type ParamsType = Record<string, string | undefined>;

export const getQueryParams = (params: ParamsType) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
};

export const addQueryParams = (params: ParamsType) => {
    window.history.pushState(null, '', getQueryParams(params));
};
