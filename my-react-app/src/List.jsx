import PropTypes from "prop-types"

function List(props) {
    
    const listItem = props.items 
    const category = props.category

    listItem.sort((a, b) => a.name.localeCompare(b.name));
    // listItem.sort((a, b) => b.calories - a.calories);

  const listItems = listItem.map(item => <li key={item.id}>{item.name} - {item.calories}</li>)

  return (
    <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>
  );

}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List