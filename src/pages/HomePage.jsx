import {  Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log('API URL:', apiUrl);
  
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg  mx-auto">
        <form>
          <label className="input shadow-md  flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What would you like to cook today?"
            />
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight ">
          Popular choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard />

          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
