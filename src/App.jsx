import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import EmailList from "./components/EmailList.jsx";
import EmailReader from "./components/EmailReader.jsx";
import Loader from "./components/Loader.jsx";
import config from "./config.js";
import "./App.css";

function App() {
  const [filter, setFilter] = useState(null);
  const [emails, setEmails] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    fetch(`${config.baseUrl}/?page=${page}`)
      .then((res) => res.json())
      .then((data) => setEmails(data.list));
  }, [setEmails]);

  function openEmail(email) {
    setSelectedEmail(email);
  }

  return (
    <main>
      <Header filter={filter} handleFilterChange={setFilter} />
      {!emails ? (
        <Loader />
      ) : (
        <div className="container">
          <EmailList emails={emails} handleClick={openEmail} />
          {selectedEmail && <EmailReader email={selectedEmail} />}
        </div>
      )}
    </main>
  );
}

export default App;
