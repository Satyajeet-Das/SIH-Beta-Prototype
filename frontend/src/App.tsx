import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import { Layout1 } from "./layouts/Layout";
import LearningPathways from "./pages/Learning_Pathways";
import SkillGap from "./pages/skillGap";

function App() {
  return (
    <Router>
      <Routes>
        {/* If there is written anything inside the custom component it is passed as prop in children */}
        <Route
          path="/"
          element={
            <Layout>
              <LearningPathways />
            </Layout>
          }
        />

        <Route path="/skill-gap" element={<Layout1><SkillGap /></Layout1>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
