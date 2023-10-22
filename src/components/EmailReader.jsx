import { useEffect, useState } from "react";
import config from "../config";
import Loader from "./Loader";

export default function EmailReader({ email }) {
  const [body, setBody] = useState(null);

  useEffect(() => {
    fetch(`${config.baseUrl}/?id=${email.id}`)
      .then((res) => res.json())
      .then((data) => setBody(data.body));
  }, [setBody]);

  if (!body) {
    return <div className="reader">
      <Loader />
    </div>
  }

  function getDateString(epoch) {
    return new Date(epoch).toLocaleString("IST");
  }

  return (
    <div className="reader">
      <div>
        <div className="avatar">
          <p>{email.from.name[0].toUpperCase()}</p>
        </div>
      </div>
      <div>
        <div>
            <p>{email.subject}</p>
            <button className="button">Mark as favorite</button>
        </div>
        <p>{getDateString(email.date)}</p>
        <div id="email_body" dangerouslySetInnerHTML={{__html: body}}></div>
      </div>
    </div>
  );
}
