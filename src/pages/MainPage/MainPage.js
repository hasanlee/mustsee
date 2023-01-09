import React from "react";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";
const MainPage = () => {
  return (
    <div>
      <Header />
      <main className='flex py-8 px-10 w-full'>
        <section className='w-3/5'>
          <div className='w-full px-8'>
            <SearchBox />
          </div>
          <div className='p-8'>
            <Movies />
          </div>
        </section>
        <aside className='w-2/5'>
          <Favorites />
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
