import Books from './static_data/Books';

class StateApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      selectedBook: Books[0]
    }
  }
  searchByTitle(title) {
    let updateList = Books;
    updateList = updateList.filter( book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });
    this.setState({
      books: updateList
    })
  }
}