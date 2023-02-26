export const toUrlParams = (params: any) => {
  const listParams = [];
  for (const key in params) {
    listParams.push([key, encodeURI(params[key])]);
  }
  return listParams.map((value) => value.join('=')).join('&');
};
