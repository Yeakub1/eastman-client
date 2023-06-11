const saveImageOnDatabase = async (image) => {
  const imageData = new FormData();
  imageData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_DB_IMAGE
  }`;

  const res = fetch(url, {
    method: "POST",
    body: imageData,
  });
  const data = (await res).json();
  return data;
};

export default saveImageOnDatabase;
