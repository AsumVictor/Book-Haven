function convertData(data) {
  const keys = Object.keys(data);
  const result = keys.map((id) => {
    const bookData = data[id][0];

    const currentChapter = Math.ceil(Math.random() * 20);
    const chapters = Math.floor(Math.random() * 11) + 20;

    const progress = currentChapter / chapters;

    return {
      id,
      author: bookData.author,
      title: bookData.title,
      category: bookData.category,
      currentChapter,
      progress,
    };
  });
  return result;
}

export default convertData;
