const createQueryParams: any = (params): string => Object
  .keys(params)
  .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  .join('&');

export { createQueryParams };
