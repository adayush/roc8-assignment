import EmailListItem from "./EmailListItem"

export default function EmailList({ emails, handleClick }) {
  return (
    <div className="email_list">
      {emails.map((email) => (
        <EmailListItem email={email} key={email.id} onClick={handleClick} />
      ))}
    </div>
  );
}