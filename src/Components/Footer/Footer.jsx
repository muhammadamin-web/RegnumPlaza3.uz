/* eslint-disable react/no-unescaped-entities */
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../../assets/images/metka.png";
import { MdOutlineLocationOn } from "react-icons/md";
const DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [48, 56],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Footer = () => {
  const position = [41.307163, 69.281239];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_card1">
            <h2 className="footer_title">Bog‘lanish</h2>
            <div className="footer_location">
              <div className="footer_location_title">
                <MdOutlineLocationOn className="footer_location_icon" />
                Ish vaqti{" "}
              </div>
              <p className="footer_location_text">
                Har kun soat 09:00 dan 18:00 gacha
              </p>
            </div>
            <div className="footer_location">
              <div className="footer_location_title">
                <MdOutlineLocationOn className="footer_location_icon" />
                Sotuv ofisi{" "}
              </div>
              <p className="footer_location_text">
                Toshkent shahri, Mirobod tumani, Oybek ko‘chasi 38а, Biznes
                center "Avalon", 1 qavat
              </p>
            </div>
            <div className="footer_social">
              <div className="footer_phone">
                <p className="footer_phone_text">Telefon</p>
                <a href="tel:1361" className="footer_phone_number">
                  <BiSolidPhoneCall />
                  1361
                </a>
              </div>
            </div>
            <div className="footer_icons">
                <a href="https://www.facebook.com/txtgroup.uzb" className="footer_icon">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/txtgroup.uzb" className="footer_icon">
                  <FaInstagram />
                </a>
                <a href="https://t.me/txtgroupuzb" className="footer_icon">
                  <FaTelegramPlane />
                </a>
                <a href="#!" className="footer_icon">
                  <FaYoutube />
                </a>
              </div>
          </div>
          <div className="footer_card2">
            <div>
              <MapContainer
                center={position}
                zoom={13}
                className="map_container"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  opacity={0.2}
                />
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  opacity={1}
                />
                <Marker position={position}>
                  <Popup>Kosmonavtlar Metro Bekati</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="footer_card3">
            <p className="footer_card3_text">
              Ushbu saytdagi suratlar loyiha arxitekturasini tushunish, fasad, dizayn va interer tasvirlari bilan tanishish, majmua infratuzilmasini oʻrganib chiqish maqsadida yuklangan. U ommaviy oferta hisoblanmaydi.
            </p>  
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
