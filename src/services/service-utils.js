export const isMobile = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};
export const isDesktop = () => {
  return window.matchMedia("(min-width: 1024px)").matches;
};

export const getViewPortWidth = () => {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

export const getViewPortHeight = () => {
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
};

export const getRandomId = () => {
  return `id_${Math.random()
    .toString()
    .slice(2)}`;
};

export const getUrlParameter = name => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};
