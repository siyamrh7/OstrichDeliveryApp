import Header from "../components/Header";
import "./SearchPageFood.css";
import styles from "./SearchFood.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchPageFood = () => {
  const navigate=useNavigate()
  const [search,setSearch]=useState("")
  const onchangeHandler=(e)=>{
    setSearch(e.target.value)
  }
  const submitHandler=()=>{
    navigate(`/foods/search/${search}`)
  }
  return (
    <div className="search-page1">
      
      
      <div className="frame-parent7">
        <div className="title-top-sub-title-inner">
          <div className="recommended-resto-container">
            <b className="recommended-resto1">Recommended Resto</b>
          </div>
          <div className="see-all-container">
            <div className="see-all1">see all</div>
          </div>
        </div>
        <div className="recommeneded-resto-group">
          <div className="recommeneded-resto3">
            <div className="image3">
              <img
                className="unsplashsnlfvyml8os-icon3"
                alt=""
                src="/unsplashsnlfvyml8os3@2x.png"
              />
            </div>
            <div className="text4">
              <div className="title3">
                <b className="waroeng-ummi1">Waroeng Ummi</b>
              </div>
              <div className="rating-star-etc3">
                <div className="star3">
                  <img
                    className="iconlyregularboldstar3"
                    alt=""
                    src="/iconlyregularboldstar3.svg"
                  />
                  <div className="div18">4.8</div>
                </div>
                <img className="ellipse-icon" alt="" src="/ellipse-13.svg" />
                <div className="div18">2.5km</div>
              </div>
            </div>
          </div>
          <div className="recommeneded-resto3">
            <div className="image3">
              <img
                className="unsplashsnlfvyml8os-icon3"
                alt=""
                src="/unsplashsnlfvyml8os4@2x.png"
              />
            </div>
            <div className="text4">
              <div className="title3">
                <b className="waroeng-ummi1">The Halal Food</b>
              </div>
              <div className="rating-star-etc3">
                <div className="star3">
                  <img
                    className="iconlyregularboldstar3"
                    alt=""
                    src="/iconlyregularboldstar4.svg"
                  />
                  <div className="div18">4.8</div>
                </div>
                <img className="ellipse-icon" alt="" src="/ellipse-14.svg" />
                <div className="div18">2.5km</div>
              </div>
            </div>
          </div>
          <div className="recommeneded-resto3">
            <div className="image3">
              <img
                className="unsplashsnlfvyml8os-icon3"
                alt=""
                src="/unsplashsnlfvyml8os5@2x.png"
              />
            </div>
            <div className="text4">
              <div className="title3">
                <b className="waroeng-ummi1">KFC - Kentucky Fried Chicken</b>
              </div>
              <div className="rating-star-etc3">
                <div className="star3">
                  <img
                    className="iconlyregularboldstar3"
                    alt=""
                    src="/iconlyregularboldstar5.svg"
                  />
                  <div className="div18">4.8</div>
                </div>
                <img className="ellipse-icon" alt="" src="/ellipse-15.svg" />
                <div className="div18">2.5km</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recenly-search-parent">
        <div className="group">
          <div className="title-top-sub-title3">
            <div className="title-top-sub-title-inner">
              <div className="recommended-resto-container">
                <div className="see-all1">Recently Searched</div>
              </div>
            </div>
          </div>
          <div className="recenly-search-inner">
            <div className="group">
              <div className="parent1 orange-search-item">
                <div className="categories1">
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle.svg"
                  />
                  <div className="text7">Mahangu soup</div>
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle1.svg"
                  />
                </div>
                <div className="categories1">
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle2.svg"
                  />
                  <div className="text7">Mieliepap</div>
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle3.svg"
                  />
                </div>
                <div className="categories1">
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle4.svg"
                  />
                  <div className="text7">Bullfrog</div>
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle5.svg"
                  />
                </div>
                <div className="categories1">
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle6.svg"
                  />
                  <div className="text7">Potjiekos</div>
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle7.svg"
                  />
                </div>
                <div className="categories1">
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle8.svg"
                  />
                  <div className="text7">Oysters</div>
                  <img
                    className="iconlysharpbulktime-circle"
                    alt=""
                    src="/iconlysharpbulktime-circle9.svg"
                  />
                </div>
                </div>

            </div>
          </div>
        </div>

      </div>
      <div className={styles.restoNearMe}>
        <div className={styles.restoNearMe1}>Resto Near Me</div>
        <div className={styles.card2Parent}>
          <div className={styles.card2}>
            <div className={styles.recommenededResto}>
              <div className={styles.image}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon}
                  alt=""
                  src="/unsplashsnlfvyml8os8@2x.png"
                />
              </div>
              <div className={styles.text7}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.waroengUmmi}>Waroeng Ummi</b>
                  <div className={styles.frameParent}>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.jajanan}>Jajanan</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.jajanan}>Coffee</div>
                    </div>
                    <div className={styles.jajananWrapper}>
                      <div className={styles.jajanan}>Gorengan</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar6.svg"
                    />
                    <div className={styles.km}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-11.svg"
                  />
                  <div className={styles.km}>2.5km</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mostVisited6}>
            <div className={styles.recommenededResto1}>
              <div className={styles.image1}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon}
                  alt=""
                  src="/unsplashsnlfvyml8os9@2x.png"
                />
              </div>
              <div className={styles.text8}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.nusaPenidas}>Nusa Penida’s</b>
                  <div className={styles.frameParent}>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Fast Food</div>
                    </div>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Kebab</div>
                    </div>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Meat</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc1}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar7.svg"
                    />
                    <div className={styles.km}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-12.svg"
                  />
                  <div className={styles.km}>2.5km</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mostVisited8Parent}>
          <div className={styles.card2}>
            <div className={styles.recommenededResto1}>
              <div className={styles.image1}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon}
                  alt=""
                  src="/unsplashsnlfvyml8os10@2x.png"
                />
              </div>
              <div className={styles.text8}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.nusaPenidas}>Selayaran</b>
                  <div className={styles.frameParent}>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Fast Food</div>
                    </div>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Kebab</div>
                    </div>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Meat</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc1}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar7.svg"
                    />
                    <div className={styles.km}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-12.svg"
                  />
                  <div className={styles.km}>2.5km</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.recommenededResto1}>
              <div className={styles.image1}>
                <img
                  className={styles.unsplashsnlfvyml8osIcon}
                  alt=""
                  src="/unsplashsnlfvyml8os11@2x.png"
                />
              </div>
              <div className={styles.text8}>
                <div className={styles.waroengUmmiParent}>
                  <b className={styles.nusaPenidas}>Waroeng Ummi</b>
                  <div className={styles.frameParent}>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Fast Food</div>
                    </div>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Soda</div>
                    </div>
                    <div className={styles.fastFoodWrapper}>
                      <div className={styles.jajanan}>Rice</div>
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStarEtc1}>
                  <div className={styles.star}>
                    <img
                      className={styles.iconlyregularboldstar}
                      alt=""
                      src="/iconlyregularboldstar7.svg"
                    />
                    <div className={styles.km}>4.8</div>
                  </div>
                  <img
                    className={styles.ratingStarEtcChild}
                    alt=""
                    src="/ellipse-12.svg"
                  />
                  <div className={styles.km}>2.5km</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={submitHandler}>
      <div className="search-bar1">
        <img
          className="magnifyingglass-icon1"
          alt=""
          src="/magnifyingglass1.svg"
        />
        <input onChange={onchangeHandler} autoFocus className="vegetables-fruits1 inputstylenone" placeholder="{ text }"/>
      </div>
      </form>
      <Header text="Search" />
    </div>
  );
};

export default SearchPageFood;
