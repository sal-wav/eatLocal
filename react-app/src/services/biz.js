export const getBiz = async () => {
  const response = await fetch("/api/biz", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json()
}

// export const getThreeBiz = async () => {
//   const response = await fetch("api/biz/three", {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   return await response.json()
// }

export const postBiz = async (name, imageUrl, phoneNum, description, categoryIds, featureIds) => {
  const response = await fetch("/api/biz/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      image_url: imageUrl,
      phone_num: phoneNum,
      description,
      categoryIds,
      featureIds
    }),
  });
  return await response.json();
}

export const postItem = async (name, description, imageUrl, bizId) => {
  const response = await fetch(`/api/food/biz/${bizId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      image_url: imageUrl,
      business_id: bizId
    })
  });
  return await response.json();
}
