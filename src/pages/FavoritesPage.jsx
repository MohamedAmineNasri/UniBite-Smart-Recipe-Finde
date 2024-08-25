import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../libs/utils";
const FavoritesPage = () => {
  const navigate = useNavigate();
  const fav = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fav.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
          ))}
        </div>
        {fav.length === 0 && (
          <section className="home grid h-screen pt-32 pb-16">
            <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
              <div className="home__data justify-self-center text-center lg:text-left">
                <p className="pb-2 font-semibold text-black ">Error 404</p>
                <h1 className="pb-4 text-5xl font-bold lg:text-6xl text-black  ">
                  Hey Buddy
                </h1>
                <p className="pb-8 font-semibold text-black">
                  We can't seem to find the page <br />
                  you are looking for.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-gray-900 py-4 px-8 font-bold text-white"
                  onClick={() => navigate("/")}
                >
                  Go Home
                </a>
              </div>

              <div className="home__img justify-self-center">
                <img
                  src="/image.png"
                  className="w-64 animate-floating lg:w-[400px]"
                  alt="home image"
                />
                <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64"></div>
              </div>
            </div>

            <div className="home__footer flex items-center justify-center gap-2 self-end text-sm font-semibold">
              <p>0891 2345 6789</p>
              <p>|</p>
              <p>mohamedamine.nasri@esprit.tn</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
