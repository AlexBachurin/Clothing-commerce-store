import { categories } from "../../utils/categories";
import CategoryContainer from "../../components/Category-container/CategoryContainer";

const Home = () => {
	return <CategoryContainer categories={categories} />;
};

export default Home;
