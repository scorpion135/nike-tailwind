import React from "react";
import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections/index";

import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b sm:pb-24 sm:pr-16">
        <Hero />
      </section>
      <section className="padding sm: py-24">
        <PopularProducts />
      </section>
      <section className="padding sm: py-24">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 sm:px-16">
        <Services />
      </section>
      <section className="padding sm: py-24">
        <SpecialOffers />
      </section>
      <section className="padding sm: py-24 bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:px-16 py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      <section className="padding-x sm:px-16 padding-t sm:pt-24 bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
