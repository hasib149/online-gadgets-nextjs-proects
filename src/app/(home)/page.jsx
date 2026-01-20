import Banner from "@/home/Banner";
import CallToAction from "@/home/CallToAction";
import Categories from "@/home/Categories";
import CustomerReviews from "@/home/CustomerReviews";
import Featured from "@/home/Featured";
import TopBrands from "@/home/TopBrands";
import WhyChooseUs from "@/home/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <TopBrands></TopBrands>
      <CustomerReviews></CustomerReviews>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
