import { getDataFromLocalStorage } from "../utilities/localstorage";


export const cartItemDataFromLoacalStorage = async () => {
  const fetchURL = await fetch("Products.json")
  const data = await fetchURL.json()
  const getData = getDataFromLocalStorage();
let foundData = [];
for (const id in getData) {
    const findData = data.find((el) => el.id === id);
  findData.quantity = getData[id];
    if (findData) foundData.push(findData);
}
  return foundData;
}