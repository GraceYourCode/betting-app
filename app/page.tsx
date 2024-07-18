"use client"

import Events from "@/components/Events";
import Promotion from "@/components/home/Promotion";

const Home = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/sports/all");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full">
     <Promotion />
     <Events />
    </div>
  );
};

export default Home;
