import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, PageNotFound, SentimentAnalysis } from "../pages/Index";

import ScrollToTop from "../utils/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
