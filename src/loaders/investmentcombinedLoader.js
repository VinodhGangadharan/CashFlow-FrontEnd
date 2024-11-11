import investmentcategoryLoader from "./investmentcategoryLoader"
import investmentLoader from "./investmentLoader";

const investmentcombinedLoader = async () => {
    const investmentcategory = await investmentcategoryLoader();
    const investment = await investmentLoader();

    return { investmentcategory, investment };
}

export default investmentcombinedLoader;