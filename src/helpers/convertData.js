import React from "react";

function convertData(data) {
  const result = [];
  for (const id in data) {
    if (data.hasOwnProperty(id)) {
      const entry = data[id][0];
      result.push({
        id: id,
        author: entry.author,
        title: entry.title,
        category: entry.category,
      });
    }
  }
  return result;
}

export default convertData;
