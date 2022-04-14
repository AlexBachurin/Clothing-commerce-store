import CategoryContainer from "./components/Category-container/CategoryContainer";
import { categories } from "./utils/categories";

const App = () => {
	return <CategoryContainer categories={categories} />;
};

export default App;
