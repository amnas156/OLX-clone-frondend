import SellButton from "@/components/Button/SellButton/SellButton";
import Footer from "@/components/footer/Footer";
import CategorySection from "@/components/home/CategorySection";
import FreshRecommendations from "@/components/home/FreshRecommendations";
import NavBarContainer from "@/components/navbar/NavBarContainer";

export default function Home() {  
  return (
    <div>
      <NavBarContainer />
      <CategorySection/>
      <FreshRecommendations/>
      <SellButton/>
      <Footer/>
    </div>
  );
}
