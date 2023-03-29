import "./styles.css";
import Filter from "../../components/Filter";
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CardList from "../../components/Cards/CardList";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Filter />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
