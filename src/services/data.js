import { getFullData } from "./api";

export const principalData = async () => {
  try {
    const { results } = await getFullData();
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
    return [];
  }
};
