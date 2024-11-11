import goalcategoryLoader from "./goalcategoryLoader"
import goalLoader from "./goalLoader";

const goalcombinedLoader = async () => {
    const goalcategory = await goalcategoryLoader();
    const goal = await goalLoader();

    return { goalcategory, goal };
}
 
export default goalcombinedLoader;