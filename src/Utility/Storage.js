const getStoreBook = () => {
  const storeBookStr = localStorage.getItem("readList");
  if (storeBookStr) {
    const storeBookData = JSON.parse(storeBookStr);
    return storeBookData;
  } else {
    return [];
  }
};

const addToStoreBD = (id) => {
  const storeBookData = getStoreBook();
  if (storeBookData.includes(id)) {
    alert("This book already exist");
  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("readList", data);
  }
};
export { addToStoreBD, getStoreBook };
