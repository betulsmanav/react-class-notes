import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import imgMap from "./assests/map.png";
import imgMail from "./assests/mail.png";
import imgPhone from "./assests/phone.png";

function App() {
  const [veri, setVeri] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiosFonk = async () => {
    const baseUrel = "https://randomuser.me/api/";
    await axios.get(baseUrel).then((res) => {
      const data = res.data.results[0];
      setVeri(data);
      setLoading(false)
      console.log(data);
    });
  };

  const handleClick = () => {
    axiosFonk();
  }

  useEffect(() => {
    axiosFonk();
  }, []);

  return (
    <div className="App">
      {(!loading) && (
        <div className="card-container">
        <div className="card">
          <div className="header-container">
            <img className="picture" src={veri?.picture?.large} alt="resim" />
            <div className="header">
              {veri?.name?.title +
                " " +
                veri?.name?.first +
                " " +
                veri?.name?.last}
            </div>
          </div>

          <div className="text-container">
            <div className="info-area">
              <img className="icon" src={imgMail} alt="mail" />
              <p>{veri?.email}</p>
            </div>
            <div className="info-area">
              <img className="icon" src={imgPhone} alt="phone" />
              <p>{veri.phone}</p>
            </div>
            <div className="info-area">
              <img className="icon" src={imgMap} alt="map" />
              <p>{veri?.location?.city + "- " + veri?.location?.country}</p>
            </div>
            <div className="other">
            <p>Age:{veri?.dob?.age}</p>
            <p>Register Date:{veri?.registered?.date.slice(0, 10)}</p>
           </div>
          </div>
        </div>
        <button type="reset" onClick={handleClick}>Random User</button>
      </div>
      )}
    </div>
  );
}

export default App;
