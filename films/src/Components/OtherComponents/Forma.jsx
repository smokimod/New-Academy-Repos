export const Forma = (props) => {
  return (
    <div className="forma">
      <label htmlFor="title">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          value={props.item}
          onChange={props.addElement}
        />
      </label>
      <label htmlFor="type">
        Type:
        <select
          name="type"
          id="type"
          value={props.type}
          onChange={props.addType}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </label>
      <label htmlFor="sort">
        <span className="name"> Sort By: </span>
        <select
          name="sort"
          id="title_two"
          onChange={props.addSort}
          value={props.sort}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Year">Year</option>
        </select>
      </label>
      <button className="button" onClick={props.searchMovies}>
        Search
      </button>
    </div>
  );
};
