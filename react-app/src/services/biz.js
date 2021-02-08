export const getBiz = async () => {
  const response = await fetch("/api/biz/", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json()
}

export const postBiz = async (name, imageUrl, phoneNum, description, openingHour, openingMin, closingHour, closingMin, categoryIds, featureIds) => {
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
      opening_hour: openingHour,
      opening_min: openingMin,
      closing_hour: closingHour,
      closing_min: closingMin,
      categoryIds,
      featureIds
    }),
  });
  return await response.json();
}

export const editBiz = async(bizId, name, imageUrl, phoneNum, description, openingHour, openingMin, closingHour, closingMin, categoryIds, featureIds) => {
  const response = await fetch(`/api/biz/${bizId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      image_url: imageUrl,
      phone_num: phoneNum,
      description,
      opening_hour: openingHour,
      opening_min: openingMin,
      closing_hour: closingHour,
      closing_min: closingMin,
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

export const editItem = async (name, description, imageUrl, bizId, foodId) => {
  const response = await fetch(`/api/food/${foodId}`, {
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

export const getFoodById = async (foodId) => {
  const response = await fetch(`/api/food/${foodId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const deleteFood = async (foodId) => {
  const response = await fetch(`/api/food/${foodId}`, {
    method: 'DELETE'
  });
  return await response.json();
}

export const getReview = async (reviewId) => {
  const response = await fetch(`/api/review/${reviewId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export const postReview = async (selectedRating, comment, bizId) => {
  const response = await fetch(`/api/review/biz/${bizId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stars: selectedRating,
      comment
    })
  });
  return await response.json();
}

export const editReview = async (selectedRating, comment, reviewId) => {
  const response = await fetch(`/api/review/${reviewId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stars: selectedRating,
      comment
    })
  });
  return await response.json();
}

export const deleteReview = async (reviewId) => {
  const response = await fetch(`/api/review/${reviewId}`, {
    method: 'DELETE'
  });
  return await response.json();
}
