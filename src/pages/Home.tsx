import { Category } from "../components/Category/Category";
import { Products } from "../components/Products/Products";

export const Home = () => {
    return (
        <div className="mt-6">
            <Category />
            <Products />
        </div>
    );
};
