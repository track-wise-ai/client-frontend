type QueryParams = {
  [key: string]: string | null;
};

const getQueryParams = (urlString: string): QueryParams => {
  try {
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);
    const result: QueryParams = {};

    for (const [key, value] of params.entries()) {
      result[key] = value;
    }

    return result;
  } catch {
    return {};
  }
};

export { getQueryParams };
