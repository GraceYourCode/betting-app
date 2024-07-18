import epl from "@/public/assets/download.jpg";
import bundesliga from "@/public/assets/bundesliga.jpg";
import laliga from "@/public/assets/la_liga.jpg";
import ligue1 from "@/public/assets/ligue_one.jpg";
import serie_a from "@/public/assets/serie_a.jpg";
import Image from "next/image";

const images = [epl, laliga, serie_a, bundesliga, ligue1];

const Promotion = () => {
  return (
    <div className="bg-sky-950 flex gap-8 h-52 relative overflow-x-scroll">
      {images.map((image, index) => (
        <Image
          src={image}
          key={index}
          alt="us-presidential election promotion image"
          className="min-w-[40%]"
        />
      ))}
    </div>
  );
};

export default Promotion;
