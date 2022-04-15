import { createContext, useEffect, useState } from "react";
import axios from "axios";

const dogContext = createContext();

function DogProvider({ children }) {
  const [apiDogs, setApiDogs] = useState([]);
  const dogGroup = [];

  useEffect(() => {
    async function getDogs() {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      setApiDogs(Object.keys(res.data.message));
    }

    getDogs();
  }, [apiDogs]);

  apiDogs.map(async (dog, index) => {
    async function getRandomDogImg() {
      const res = await axios.get(
        `https://dog.ceo/api/breed/${dog}/images/random`
      );
      return res.data.message;
    }

    const initialObject = {
      name: dog,
      img: "",
    };

    await getRandomDogImg().then((img) => {
      initialObject["img"] = img;
    });

    await dogGroup.push(initialObject);

    async function getBreeds() {
      const res = await axios.get(`https://dog.ceo/api/breed/${dog}/list`);
      await dogGroup.push((initialObject["subBreeds"] = res.data.message));
    }

    getBreeds();
    console.log(dogGroup);
  });

  return (
    <dogContext.Provider value={{ dogGroup }}>{children}</dogContext.Provider>
  );
}

export { DogProvider };
export default dogContext;
