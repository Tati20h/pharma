export const getFullData = async () => {
  const url = `https://api.fda.gov/drug/ndc.json?limit=100`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Fetch error:", response.message);
      return [];
    }
    const data = await response.json();
    return data && data.results ? data.results : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export const getDataByName = async (name) => {
  const url = `https://api.fda.gov/drug/ndc.json?search=brand_name:${name}&limit=40`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Fetch error:", response.message);
      return [];
    }
    const data = await response.json();
    return data && data.results ? data.results : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export const getAdvertising = async (id) => {
  const url = `https://api.fda.gov/drug/label.json?search=openfda.product_ndc.exact:${id}&limit=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Fetch error:", response.message);
      return [];
    }
    const data = await response.json();
    return data && data.results ? data.results : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
