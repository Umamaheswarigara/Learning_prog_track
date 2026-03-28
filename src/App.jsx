import { useState } from "react";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dadshboard";
import Calendar from "./pages/Calendar";
import ModulesPage from "./pages/ModulesPage";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import ModuleDetailsPage from "./pages/ModuleDetailsPage";
import { modulesData } from "./data/modulesData";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [modules, setModules] = useState(modulesData);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const selectedModule = modules.find(
    (m) => m.id === selectedModuleId
  );

  if (!isLoggedIn) {
    if (page === "signup") {
      return <Signup setPage={setPage} />;
    }
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
        setPage={setPage}
        setUser={setUser}
      />
    );
  }

  return (
    <>
      
      <Navbar 
  setPage={(newPage) => {
    setPage(newPage);
    setSelectedModuleId(null);   
  }} 
/>

      {page === "dashboard" && <Dashboard user={user} modules ={modules} />}
      {page === "calendar" && <Calendar />}

      {/* MODULES SECTION */}
      {page === "modules" && (
        selectedModuleId === null ? (
          <ModulesPage
            modules={modules}
            setModules={setModules}
            onSelectModule={(id) => setSelectedModuleId(id)}
          />
        ) : (
          <ModuleDetailsPage
            module={selectedModule}
            setModules={setModules}
            goBack={() => setSelectedModuleId(null)}
          />
        )
      )}
    </>
  );
}

export default App;