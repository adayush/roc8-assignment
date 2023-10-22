export default function EmailListItem({ email, onClick }) {

  return (
    <div className="email_list_item" onClick={() => onClick(email)}>
      <div>
        <div className="avatar">
          <p>{email.from.name[0].toUpperCase()}</p>
        </div>
      </div>
      <div>
        <p>From: <strong>{`${email.from.name} <${email.from.email}>`}</strong> </p>
        <p>Subject: <strong>{email.subject}</strong></p>
        <p>{email.short_description}</p>
      </div>
    </div>
  );
}
