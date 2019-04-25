export const urlToParams = str =>
  str
    .slice(1)
    .split("&")
    .filter(d => d.length)
    .reduce((params, hash) => {
      const [key, val] = hash.split("=");
      const valGood = val === undefined ? null : decodeURIComponent(val);
      return Object.assign(params, { [key]: valGood });
    }, {});
