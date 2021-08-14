var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  headers: myHeaders,
  redirect: "follow",
};

export const sendFeedback = ({
  name,
  email,
  phone,
  whatsapp,
  country,
  region,
}) => {
  var raw = JSON.stringify({
    name,
    email,
    phone,
    whatsapp,
    country,
    region,
  });

  var postRequestOptions = {
    method: "POST",
    body: raw,
    ...requestOptions,
  };

  return fetch(
    "https://www.prolifearmy.org/api/web/oath",
    postRequestOptions
  ).then((response) => response.text());
};

export const getSignCount = (callback) => {
  var getRequestOptions = {
    method: "GET",
    ...requestOptions,
  };

  fetch("https://www.prolifearmy.org/api/web/oath", getRequestOptions)
    .then((response) => response.json())
    .then(({ count }) => callback(count));
};
