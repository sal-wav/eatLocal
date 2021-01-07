export const getCategories = async () => {
  const response = await fetch("/api/category", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const getFeatures = async () => {
  const response = await fetch("/api/feature", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}
