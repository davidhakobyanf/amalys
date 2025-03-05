"use server"
import BlockCloudContainer from "@/app/_components/BlockCloudContainer/BlockCloudContainer";
import AboutUs from "@/app/_components/AboutUs/AboutUs";
import RecommendedProducts from "@/app/_components/RecommendedProducts/RecommendedProducts";

const HomePage = () => {
    return (
        <div className={`mainGrid`}>
            <AboutUs />
            <RecommendedProducts />
        </div>
    );
};

export default HomePage;
