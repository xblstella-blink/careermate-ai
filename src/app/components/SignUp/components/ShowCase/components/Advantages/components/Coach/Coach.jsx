import user1 from "./assets/user1.png";
import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";
// import user4 from "./assets/user4/jpg";
import Image from "next/image";
const Coach = () => (
  <div>
    <div className="flex mt-18">
      {[
        { name: "user1", image: user1 },
        { name: "user2", image: user2 },
        { name: "user3", image: user3 },
      ].map((user) => (
        <Image
          key={user.name}
          src={user.image}
          alt={user.name}
          width={56}
          height={56}
          className="ml-6 rounded-full border-white border-2 bg-orange-400"
        />
      ))}
    </div>
  </div>
);

export default Coach;
