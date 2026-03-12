import user1 from "./assets/user1.avif";
import user2 from "./assets/user2.avif";
import user3 from "./assets/user3.avif";
import user4 from "./assets/user4.avif";
import Image from "next/image";

const Coach = () => {
  return (
    <div>
      <div className="flex">
        {[
          { name: 'User1', img: user1 },
          { name: 'User2', img: user2 },
          { name: 'User3', img: user3 },
          { name: 'User4', img: user4 },
        ].map((user) => (
          < Image key={user.name}// tailwindcss 实现头像重叠效果
            src={user.img}
            alt={user.name}
            width={56}
            height={56}
            className="not-first:-ml-6 border-2 border-white rounded-full"
          />
        ))
        }
      </div>

    </div >

  );
}
export default Coach;