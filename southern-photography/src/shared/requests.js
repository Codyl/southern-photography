export const getStripeKey = async () => {
  try {
    const response = await fetch("http://localhost:3001/stripe-key");
    const key = await response.text();
    console.log(key);
    return key;
  } catch (err) {
    console.error(err);
  }
};
export const getImages = async (groupName) => {
  try {
    const response = await fetch(`http://localhost:3001/images/${groupName}`);
    let files = await response.json();
    return files;
  } catch (err) {
    console.error(err);
  }
};

export const getImage = async (imageName) => {
  try {
    const response = await fetch(`http://localhost:3001/image/${imageName}`);
    return response.text();
  } catch (e) {
    console.log(e);
  }
};
