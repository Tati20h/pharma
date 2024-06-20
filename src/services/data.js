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
  try {
    const results = await getAdvertising(id);
    const dataNew = [
      {
        title: "Indications",
        text: results[0].indications_and_usage
          ? results[0].indications_and_usage[0]
          : "NO RESULTS",
      },
      {
        title: "Dosage and Administrator",
        text: results[0].dosage_and_administration
          ? results[0].dosage_and_administration[0]
          : "NO RESULTS",
      },
      {
        title: "Adverse Reactions",
        text: results[0].adverse_reactions
          ? results[0].adverse_reactions[0]
          : "NO RESULTS",
      },
      {
        title: "Contraindications",
        text: results[0].contraindications
          ? results[0].contraindications[0]
          : "NO RESULTS",
      },
    ];

    return dataNew;
  } catch (error) {
    console.error("Error getting data in principalData: ", error);
  }
};
