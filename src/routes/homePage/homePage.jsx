import SearchBar from "../../Components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get your Dream Place</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nostra,
            interdum curae montes id placerat mattis sociosqu dui nisl, primis
            aenean gravida enim orci lacus ante.Habitasse penatibus diam felis
            consectetur mauris hac mi mus augue mollis, vel eleifend suscipit
            curabitur dui sem volutpat amet massa bibendum porta, cras vitae
            sagittis dis ultricies enim ligula fames conubia.Sem penatibus
            consectetur bibendum sociosqu nibh faucibus auctor quam, imperdiet
            amet sagittis blandit lacus efficitur sed pharetra, ultrices donec a
            montes nisl tellus nec.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Years of Experience</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
