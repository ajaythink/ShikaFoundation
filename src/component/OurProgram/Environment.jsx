import banner1 from "../../../public/Environment/elderly-person-children-holding-plant.jpg";
import banner2 from "../../../public/Environment/save-plante.jpg";
import banner3 from "../../../public/Environment/trees-planting.jpg";
import HCarousel from "../Home/HCarousel";
import Bg_green_frame from "../../assets/DonateForHealthBanner/bg-green-frame.jpg";
import { Link } from "react-router-dom";
function Environment() {
  const images = [banner1, banner2, banner3]; // Array of images

  return (
    <>
      <HCarousel images={images} />
      <div className="px-5 lg:px-20 py-10">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          WHY ENVIRONMENT
        </h2>
        <div className="text-black/75  text-xl *:pt-3">
          <p>
            Shika Foundation Trust recognizes that environmental sustainability
            is crucial for the well-being of future generations. With the
            increasing impact of climate change, pollution, and deforestation,
            it is essential to promote sustainable practices and raise awareness
            about environmental conservation. Our commitment to protecting the
            planet aligns with our mission to empower communities and ensure a
            better quality of life for all.
          </p>
          <p className="pt-2">
            We believe that every individual has a role to play in preserving
            the environment. Through our initiatives, we aim to educate
            communities about the importance of environmental conservation and
            encourage them to adopt sustainable practices. By fostering a sense
            of responsibility towards the environment, we can work together to
            create a greener, healthier planet for future generations.
          </p>
        </div>
      </div>
      <div className="px-5 lg:px-20 py-10 bg-green-50">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          WHAT WE DO
        </h2>
        <div className="text-black/75  text-xl *:pt-3">
          <p>
            Shika Foundation Trust is dedicated to promoting environmental
            sustainability through various initiatives. Our programs focus on
            raising awareness about environmental issues, encouraging community
            participation in conservation efforts, and implementing sustainable
            practices. Some of our key initiatives include:
          </p>
          <ul className="list-disc pl-5 pt-2">
            <li>Tree plantation drives</li>
            <li>Waste management and recycling programs</li>
            <li>Community clean-up campaigns</li>
            <li>Environmental education and awareness workshops</li>
          </ul>
          <p className="pt-2">
            By engaging communities in these initiatives, we aim to create a
            sense of ownership and responsibility towards the environment. Our
            goal is to empower individuals to take action and contribute to a
            sustainable future.
          </p>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat min-h-[300px] flex flex-col items-center justify-center text-white p-10 backdrop-opacity-10"
        style={{ backgroundImage: `url(${Bg_green_frame})` }}
      >
        <Link to="/donate-for-environment">
          <button className="uppercase bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none">
            Donate for Environment
          </button>
        </Link>
        <div className="text-center mt-5">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
            FOR CSR SUPPORT
          </h2>
          <p className="text-gray-700">Write to Vivek Kumar – 9431869421</p>
          <p className="text-gray-700">csr@shikafoundationtrust.in</p>
        </div>
      </div>
    </>
  );
}

export default Environment;
