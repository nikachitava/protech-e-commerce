import { Category } from "../components/Category/Category";
import { Header } from "../components/Header/Header";
import { Products } from "../components/Products/Products";

export const Home = () => {
    return (
        <>
            <div className="mt-6">
                <Header subheader={"Home"} header={"Best Products"} />
            </div>
            <div className="mt-6">
                <Category>
                    <Products additionalProps="" />
                </Category>
            </div>
        </>
    );
};
