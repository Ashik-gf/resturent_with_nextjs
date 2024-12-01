import LatestRecipys from "./category/page";
import Deliciousness from "./components/Deliciousness";
import HandPickCollections from "./components/HandPickCollections";

import PopularCategory from "./components/PopularCategory";
import SuperDelicious from "./components/SuperDelicious";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div className="p-2">
      {/* <Header /> */}
      <Hero />
      <SuperDelicious />
      <PopularCategory />
      <Deliciousness />
      <HandPickCollections />
      <LatestRecipys />
    </div>
  );
}
