import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import LearningPathways from "./pages/learning_pathways/Learning_Pathways";

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
