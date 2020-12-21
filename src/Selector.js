import React, { Component } from "react";
import PropTypes from "prop-types";

class Selector extends Component {
  updateShelf = (e) => {
    const book = this.props.book;
    book.shelf = e.target.value;
    this.props.onUpdateBook(book);
  };

  render() {
    const { book, shelves } = this.props;
    return (
      //TODO: Refactor selected options in DRY manner (loop through shelves?)
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={(e) => this.updateShelf(e)}>
          <option value="move" disabled>
            Move to...
          </option>
          {shelves.map((shelf) => (
            <option key={shelf.name} value={shelf.name}>
              {shelf.displayName}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

Selector.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Selector;
