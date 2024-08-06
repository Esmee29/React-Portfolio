import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./NotFoundPage";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./MainLayout";
import ContactPage from "./pages/ContactPage";
import DesignProjectsPage from "./pages/DesignProjectsPage";
import DeveloperProjectsPage from "./pages/DeveloperProjectsPage";
import SupersonicPage from "./pages/projects/SupersonicPage";
import ForagerPage from "./pages/projects/ForagerPage";
import POWStoryPage from "./pages/projects/POW-StoryPage";
import ParentingPodPage from "./pages/projects/ParentingPodPage";
import NetmattersPage from "./pages/projects/NetmattersPage";
import NetmattersContactPage from "./pages/projects/NetmattersContactPage";
import JavascriptArrayPage from "./pages/projects/JavascriptArrayPage";
import WeatherReactPage from "./pages/projects/WeatherReactPage";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/design-projects" element={<DesignProjectsPage />} />
        <Route path="/developer-projects" element={<DeveloperProjectsPage />} />
        <Route path="/projects/supersonic" element={<SupersonicPage />} />
        <Route path="/projects/forager" element={<ForagerPage />} />
        <Route path="/projects/pow-story" element={<POWStoryPage />} />
        <Route path="/projects/parenting-pod" element={<ParentingPodPage />} />
        <Route path="/projects/netmatters" element={<NetmattersPage />} />
        <Route path="/projects/netmatters-contact" element={<NetmattersContactPage />} />
        <Route path="/projects/javascript-array" element={<JavascriptArrayPage />} />
        <Route path="/projects/weather-react" element={<WeatherReactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;