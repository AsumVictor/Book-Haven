function convertData(data) {
  const keys = Object.keys(data);
  const result = keys.map((id) => {
    const bookData = data[id][0];
    return {
      id,
      author: bookData.author,
      title: bookData.title,
      category: bookData.category,
    };
  });
  return result;
}

export default convertData;
