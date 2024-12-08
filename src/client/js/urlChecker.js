export function chechForUrl(url) {
  const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[^\s]*)?$/i;
  return urlRegex.test(url);
}
