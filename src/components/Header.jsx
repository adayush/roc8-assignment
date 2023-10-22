export default function Header({ filter, handleFilterChange }) {
  function handleClick(e) {
    const clicked = e.target.id;
    if (filter === clicked) {
      handleFilterChange(null);
      return;
    }
    handleFilterChange(clicked);
  }
  console.log(filter)

  return (
    <div className="filter">
      <p>Filter By:</p>
      <p
        id="unread"
        className={`button ${filter === "unread" ? "active" : ""}`}
        onClick={handleClick}
      >
        Unread
      </p>
      <p
        id="read"
        className={`button ${filter === "read" ? "active" : ""}`}
        onClick={handleClick}
      >
        Read
      </p>
      <p
        id="favorites"
        className={`button ${filter === "favorites" ? "active" : ""}`}
        onClick={handleClick}
      >
        Favorites
      </p>
    </div>
  );
}
