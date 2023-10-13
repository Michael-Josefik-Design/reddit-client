import React, { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./features/search/Search";

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        
      </main>
    </div>
  );
}

export default App;
