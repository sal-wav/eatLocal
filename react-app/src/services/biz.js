export const getBiz = async () => {
  const response = await fetch("/api/biz", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json
}

export const postBiz = async (name, imageUrl, phoneNum, description, categoryIds) => {
  const response = await fetch("/api/biz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      image_url: imageUrl,
      phone_num: phoneNum,
      description,
      categoryIds
    }),
  });
  return await response.json();
}
