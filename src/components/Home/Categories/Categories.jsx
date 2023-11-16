import { Link } from "react-router-dom";
export const Categories = () => {
  return (
    <section className="text-gray-600 font-Catallina uppercase">
      <div className="container px-5 py-24 mx-auto">
        <h1 className=" sm:text-3xl text-2xl font-bold  text-center text-purple-900 mb-20">
          Producing countries
        </h1>
        <div className="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
          <div className="p-4 md:w-1/3 flex ">
            <div className="text-purple-600 w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              W
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-yellow-700 text-lg title-font font-medium mb-2">
                Italian wines
              </h2>
              <p className="leading-relaxed text-sm">
                Wines of Italy - Italy has a long tradition of winemaking, using
                its own grape varieties and its own methods, which in recent
                years. have become increasingly sophisticated. Even when Italian
                winemakers use international varieties such as Cabernet
                Sauvignon or Chardonnay, or modern techniques such as ageing in
                new oak barrels, they give the wine a characteristic "Italian
                accent"
              </p>
              <Link
                to="wine/italy"
                className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer"
              >
                Buy wine
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="text-purple-600 w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              W
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-yellow-700 text-lg title-font font-medium mb-2">
                Spain Wines
              </h2>
              <p className="leading-relaxed text-sm">
                Spain has traditionally been associated with red and fortified
                wines. White grapes were used to produce either distillates that
                were little known outside the country or oxidative style
                fortified wines such as sherry and malaga. In the second half of
                the 20th century, more attention was paid to the development of
                internationally competitive white and sparkling wine brands
                (including those based on Verdejo, Albariño, Macabeo).
              </p>
              <Link
                to="wine/spain"
                className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer"
              >
                Buy wine
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="text-purple-600 w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              W
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-yellow-700 text-lg title-font font-medium mb-2">
                France Wines
              </h2>
              <p className="leading-relaxed text-sm">
                French wine production is recognised all over the world - it is
                not only an important export item, but also a source of national
                pride. Roland Barthes stated in his book Mythologies: "Wine is a
                national treasure for the French, just like the 360 varieties of
                cheese and her culture". Many French winemakers work abroad and
                people from all over the world come to France to learn
                winemaking.
              </p>
              <Link
                to="wine/france"
                className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer"
              >
                Buy wine
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
