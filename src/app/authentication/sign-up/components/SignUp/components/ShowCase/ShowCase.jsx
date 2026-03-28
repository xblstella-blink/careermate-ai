import Advantages from "./components/Advantages";
import SubscribeLink from "./SubscribeLink";
import UserReview from "./UserReview";
import background from "./assets/background@2x.png";
import Image from "next/image";

const ShowCase = () => (
  <div className="relative p-8 ">
    <Image className="absolute" src={background} fill size="100vw" alt="" />
    <div className="relative h-full ">
      <SubscribeLink />
      <UserReview />
      <Advantages />
    </div>
  </div>
);
export default ShowCase;
