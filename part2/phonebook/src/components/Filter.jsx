const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label>
        Filter shown with:
        <input 
          value={filter}
          onChange={handleFilterChange}
          type="text"
          placeholder="search...like on browser"
        />
      </label>
    </div>
  );
};

export default Filter;
