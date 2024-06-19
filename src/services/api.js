export const getFullData = async () => {
  const url = `https://api.fda.gov/drug/ndc.json?limit=40`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error response in getFullData " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const getDataByName = async (name) => {
  const url = `https://api.fda.gov/drug/ndc.json?search=brand_name:${name}&limit=40`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error response in getDataByName " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export const getAdvertising = async (id) => {
  const url = `https://api.fda.gov/drug/label.json?search=openfda.product_ndc.exact:${id}&limit=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Error response in getAdvertising " + response.statusText
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
