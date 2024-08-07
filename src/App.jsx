import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./NotFoundPage";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./MainLayout";
import ContactPage from "./pages/ContactPage";
import DesignProjectsPage from "./pages/DesignProjectsPage";
import DeveloperProjectsPage from "./pages/DeveloperProjectsPage";
import SupersonicPage from "./pages/SupersonicPage";
import ForagerPage from "./pages/ForagerPage";
import POWStoryPage from "./pages/POW-StoryPage";
import ParentingPodPage from "./pages/ParentingPodPage";
import NetmattersPage from "./pages/NetmattersPage";
import NetmattersContactPage from "./pages/NetmattersContactPage";
import JavascriptArrayPage from "./pages/JavascriptArrayPage";
import WeatherReactPage from "./pages/WeatherReactPage";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/design-projects" element={<DesignProjectsPage />} />
        <Route path="/developer-projects" element={<DeveloperProjectsPage />} />
        <Route path="/supersonic" element={<SupersonicPage />} />
        <Route path="/forager" element={<ForagerPage />} />
        <Route path="/pow-story" element={<POWStoryPage />} />
        <Route path="/pparenting-pod" element={<ParentingPodPage />} />
        <Route path="/netmatters" element={<NetmattersPage />} />
        <Route path="/netmatters-contact" element={<NetmattersContactPage />} />
        <Route path="/javascript-array" element={<JavascriptArrayPage />} />
        <Route path="/weather-react" element={<WeatherReactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;