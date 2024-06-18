export const getFullData = () => {
    const url = `https://api.fda.gov/drug/ndc.json?limit=40`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  

export const getDataByName = (name) => {
  const url = `https://api.fda.gov/drug/ndc.json?search=brand_name:${name}&limit=40`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};
