export const sendFeedback = ({
  name,
  email,
  phone,
  whatsapp,
  country,
  region,
}) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name,
    email,
    phone,
    whatsapp,
    country,
    region,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://www.prolifearmy.org/api/web/oath", requestOptions).then(
    (response) => response.text()
  );
};
