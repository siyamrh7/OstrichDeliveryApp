import "./SelectLocation.css";
import Header from '../components/Header'
import { Link } from "react-router-dom";
const SelectLocation = () => {
  return (
    <div className="select-location">
 <Header text="Location" />
 
      <div className="frame-group-select">
        <div className="iconlyregularoutlinearrow-parent">
          <div className="current">
            <img className="current-child" alt="" src="/frame-353.svg" />
          </div>
          <div className="your-current-loca">
            <div className="lorem">Ubud bali</div>
          </div>
        </div>
        <div className="categories-parent">
          <Link to={'/select-location-onmap'} className="categories ">
            <img className="categories-child" alt="" src="/frame-352.svg" />
            <div className="user-current-location">User current Location</div>
          </Link>
          <div className="divider-parent">
            <img className="divider-icon" alt="" src="/divider.svg" />
            <div className="available-loc">
              <div className="search-found-on-maps">
                <div className="icons-km">
                  <img className="icons" alt="" src="/icons.svg" />
                  <div className="km">2.5Km</div>
                </div>
                <div className="name-sub-name">
                  <div className="km">Ubud Bali</div>
                  <div className="jl-bali-larangan">
                    Jl. Bali, Larangan, Harjamukti, Kota Cirebon
                  </div>
                </div>
                <div className="add">
                  <img
                    className="iconlyregularbulkhome"
                    alt=""
                    src="/iconlyregularboldbookmark.svg"
                  />
                </div>
              </div>
              <img className="available-loc-child" alt="" src="/divider1.svg" />
              <div className="search-found-on-maps">
                <div className="icons-km">
                  <img className="icons" alt="" src="/icons1.svg" />
                  <div className="km">2.5Km</div>
                </div>
                <div className="name-sub-name">
                  <div className="km">Jakarta</div>
                  <div className="jl-bali-larangan">
                    Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
                  </div>
                </div>
                <div className="add">
                  <img
                    className="iconlyregularbulkhome"
                    alt=""
                    src="/iconlyregularlightbookmark.svg"
                  />
                </div>
              </div>
              <img className="available-loc-child" alt="" src="/divider2.svg" />
              <div className="search-found-on-maps">
                <div className="icons-km">
                  <img className="icons" alt="" src="/icons2.svg" />
                  <div className="km">2.5Km</div>
                </div>
                <div className="name-sub-name">
                  <div className="km">Mertapada Kulon</div>
                  <div className="jl-bali-larangan">
                    Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
                  </div>
                </div>
                <div className="add">
                  <img
                    className="iconlyregularbulkhome"
                    alt=""
                    src="/iconlyregularlightbookmark1.svg"
                  />
                </div>
              </div>
              <img className="available-loc-child" alt="" src="/divider3.svg" />
              <div className="search-found-on-maps">
                <div className="icons-km">
                  <img className="icons" alt="" src="/icons3.svg" />
                  <div className="km">2.5Km</div>
                </div>
                <div className="name-sub-name">
                  <div className="km">Nusa Tenggara Timur</div>
                  <div className="jl-bali-larangan">
                    Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
                  </div>
                </div>
                <div className="add">
                  <img
                    className="iconlyregularbulkhome"
                    alt=""
                    src="/iconlyregularlightbookmark2.svg"
                  />
                </div>
              </div>
              <img className="available-loc-child" alt="" src="/vector-3.svg" />
              <div className="search-found-on-maps">
                <div className="icons-km">
                  <img className="icons" alt="" src="/icons4.svg" />
                  <div className="km">2.5Km</div>
                </div>
                <div className="name-sub-name">
                  <div className="km">Lombok</div>
                  <div className="jl-bali-larangan">
                    Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
                  </div>
                </div>
                <div className="add">
                  <img
                    className="iconlyregularbulkhome"
                    alt=""
                    src="/iconlyregularlightbookmark3.svg"
                  />
                </div>
              </div>
              <img className="available-loc-child" alt="" src="/vector-4.svg" />
              <div className="search-found-on-maps">
                <div className="icons-km">
                  <img className="icons" alt="" src="/icons5.svg" />
                  <div className="km">2.5Km</div>
                </div>
                <div className="name-sub-name">
                  <div className="km">Denpasar</div>
                  <div className="jl-bali-larangan">
                    Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
                  </div>
                </div>
                <div className="add">
                  <img
                    className="iconlyregularbulkhome"
                    alt=""
                    src="/iconlyregularlightbookmark4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SelectLocation;
