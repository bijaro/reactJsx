import "./App.css";
import Image from "./imageInSrc.png";

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">LALEJ Mehdi</h1>
          <br />
          <img src={Image} alt="sourcephoto" />
          <br />
          <img src="/image/imageInPublic.png" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
