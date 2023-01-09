import React from "react";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";
const MainPage = () => {
  return (
    <div>
      <Header />
      <main className='flex py-8 px-10 w-full max-md:flex-col gap-3'>
        <section className='w-3/5 max-md:w-full'>
          <div className='w-full'>
            <SearchBox />
          </div>
          <div className='p-8'>
            <Movies />
          </div>
        </section>
        <aside className='w-2/5 max-md:w-full'>
          <Favorites />
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
