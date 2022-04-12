export const postImage = (props) =>
  fetch("api/algorithms", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
