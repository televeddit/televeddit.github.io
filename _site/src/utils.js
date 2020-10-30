const getSessionStorage = (key) => {
  let item = sessionStorage.getItem('televeddit');
  return item ? JSON.parse(item)[key] : null;
};

const setSessionStorage = (data) => {
  let item = sessionStorage.getItem('televeddit');
  if (item) {
    item = JSON.parse(item);
    sessionStorage.setItem('televeddit', JSON.stringify({
      ...item,
      ...data,
    }));
  } else {
    sessionStorage.setItem('televeddit', JSON.stringify(data));
  }
};

const stripHtmlTags = (input) => {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
};

export { getSessionStorage, setSessionStorage, stripHtmlTags };
