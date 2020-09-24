// Make sure to return the id value from the url that will be passed to this utility function
export default getVideoIdFromPageUrl = (url) => {
  let items = url.split('/');
  let id = items[items.length-1];
  return id;
};


