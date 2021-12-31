import client from "./Client";

const getListing = () => client.get("/listings");

const addListings = (listings, location, d, onUpload) => {
  const data = new FormData();
  data.append("title", listings.title);
  data.append("categoryId", listings.categories.value);
  data.append("description", listings.description);
  data.append("price", listings.price);
  listings.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  //   console.log(JSON.stringify(data));

  return client.post("/listings", data, {
    onUploadProgress: (progress) => onUpload(progress.loaded / progress.total),
  });
};

export { getListing, addListings };
