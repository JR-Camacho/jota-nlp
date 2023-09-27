import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import background from "../assets/images/background.jpg";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F2F6FF]">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="w-full flex-grow" style={{ backgroundImage: `url(${background})` }}>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
