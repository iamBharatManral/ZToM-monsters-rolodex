import './SearchBox.styles.css';

const SearchBox = (props) => {
  return (
    <div className="search-box">
      <input type="text" onChange={props.changeState} placeholder="monster name"/>
    </div>
  )
}

export default SearchBox;