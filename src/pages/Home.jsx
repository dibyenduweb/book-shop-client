
import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import ContactInfo from "../components/home/ContactInfo";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";



const Home = () => {

    return(
        <div>
            <Banner/>
           <div className="container mx-auto">
           <div className="my-20">
           <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
             <FeaturedProducts/></div>

           <div className="my-20">
           <h1 className="mb-16 text-2xl font-semibold text-center">UserRivew</h1>
             <UserReview/></div>

           <div className="my-20">
           <h1 className="mb-16 text-2xl font-semibold text-center">FrequentlyAsked Quastian</h1>
             <Accordion/></div>


           <div className="my-20">
           <h1 className="mb-16 text-2xl font-semibold text-center">Contact Information</h1>
             <ContactInfo/></div>
             
           </div>
        </div>
    )}
export default Home;