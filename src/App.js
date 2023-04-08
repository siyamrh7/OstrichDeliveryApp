import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Email from "./pages/Email";
import Name1 from "./pages/Name1";
import Verification from "./pages/Verification";
import LoginSignUp from "./pages/LoginSignUp";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import { useEffect } from "react";
import {io} from "socket.io-client"
import HomePage from './pages/HomePage'
import Activity from './pages/Activity'
import SelectLocation from "./pages/SelectLocation";
import Wallet1 from "./pages/Wallet1";
import AddCard from "./pages/AddCard";
import SearchPage1 from "./pages/SearchPage1";
import RateOrder from './pages/RateOrder'
import SelectLocationOnMap from "./pages/SelectLocaionOnMap";
import UserProfile from "./pages/UserProfile";
import SearchPageFood from "./Foodpages/SearchPageFood";
import HomePageFood from "./Foodpages/HomePageFood";
import ActivityFood from "./Foodpages/ActivityFood";
import ChatList from "./Foodpages/ChatList";
import Chat from "./Foodpages/Chat";
import OutOfService from "./Foodpages/OutOfService";
import NearFood from "./Foodpages/NearFood";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/email":
        title = "";
        metaDescription = "";
        break;
      case "/name":
        title = "";
        metaDescription = "";
        break;
      case "/verification":
        title = "";
        metaDescription = "";
        break;
      case "/login-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-with-keyboard":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // useEffect(() => {
  //   const socket = io.connect(process.env.REACT_APP_BACKEND_URL)
  //   var id = ""
  //   socket.on('connect', () => {
  //     id = socket.id
  //  console.log(id)
  //   });
  // }, [])

  return (
    <Routes>

      {/* Main Screens */}

      <Route path="/splash" element={<SplashScreen />} />
      <Route path="/email" element={<Email />} />
      <Route path="/name" element={<Name1 />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/login" element={<LoginSignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/select-location" element={<SelectLocation />} />
      <Route path="/wallet" element={<Wallet1 />} />
      <Route path="/add-card" element={<AddCard />} />
      <Route path="/search" element={<SearchPage1 />} />
      <Route path="/rate-order" element={<RateOrder />} />
      <Route path="/select-location-onmap" element={<SelectLocationOnMap/>} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/" element={<HomePage />} />
      

 
      {/* Food Delivery Services */}


      <Route path="/foods" element={<HomePageFood />} />
      <Route path="/foods/search" element={<SearchPageFood />} />
      <Route path="/foods/activity" element={<ActivityFood />} />
      <Route path="/foods/chats" element={<ChatList />} />
      <Route path="/foods/chat" element={<Chat />} />
      <Route path="/foods/search/:search" element={<OutOfService />} />
      <Route path="/foods/near" element={<NearFood />} />


    </Routes>
  );
}
export default App;
