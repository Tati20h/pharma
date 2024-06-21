import { getAdvertising, getFullData } from "./api";

export const principalData = async () => {
  try {
    const results = await getFullData();
    const dataNew = results.map((drug) => ({
      id: drug.product_ndc,
      name: drug.generic_name,
      labeler: drug.labeler_name,
      brand: drug.brand_name,
      expirationDate: drug.listing_expiration_date,
      category: drug.marketing_category,
      dosageForm: drug.dosage_form,
      type: drug.product_type,
      route: drug.route,
    }));

    return dataNew;
  } catch (error) {
    console.error("Error getting data in principalData: ", error);
  }
};

export const AdvertisingData = async (id) => {
  const dataAdvertising = [];
  try {
    const results = await getAdvertising(id);
    const newData = [
      {
        title: "General data",
        text: `${results[0].openfda.brand_name} , ${results[0].openfda.generic_name} , ${results[0].openfda.manufacturer_name}`,
      },
      {
        title: "Indications",
        text: results[0].indications_and_usage
          ? results[0].indications_and_usage[0]
          : null,
      },
      {
        title: "Dosage and Administrator",
        text: results[0].dosage_and_administration
          ? results[0].dosage_and_administration[0]
          : null,
      },
      {
        title: "Adverse Reactions",
        text: results[0].adverse_reactions
          ? results[0].adverse_reactions[0]
          : null,
      },
      {
        title: "Contraindications",
        text: results[0].contraindications
          ? results[0].contraindications[0]
          : null,
      },
      {
        title: "Warnings",
        text: results[0].warnings ? results[0].warnings[0] : null,
      },
      {
        title: "Active Ingredient",
        text: results[0].active_ingredient
          ? results[0].active_ingredient[0]
          : null,
      },
      {
        title: "Ask to Doctor",
        text: results[0].ask_doctor ? results[0].ask_doctor[0] : null,
      },
      {
        title: "When Using",
        text: results[0].when_using ? results[0].when_using[0] : null,
      },
      {
        title: "Questions",
        text: results[0].questions ? results[0].questions[0] : null,
      },
    ];

    newData.forEach((data) => {
      if (data.text != null && data.text !== "") {
        dataAdvertising.push(data);
      }
    });

    return dataAdvertising;
  } catch (error) {
    console.error("Error getting data in principalData: ", error);
  }
};
