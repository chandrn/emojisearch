import React, { Component } from 'react';
import { Navbar, FormControl } from "react-bootstrap";
import EmojiTable from './EmojiTable';
import emojiList from './emoji.json';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      filteredEmojiList: emojiList
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    const searchText = e.target.value;
    const filteredEmojiList = emojiList.filter((emoji) => {
      if(searchText === '')
        return true;
      if(emoji.name.toLowerCase().includes(searchText.toLowerCase()))
        return true;
      if(emoji.keywords.toLowerCase().includes(searchText.toLowerCase()))
        return true;
    });
    this.setState({
      filteredEmojiList: filteredEmojiList
    });
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Emoji Search
            </Navbar.Brand>
            <Navbar.Form pullLeft>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
            </Navbar.Form>
          </Navbar.Header>
        </Navbar>
        <EmojiTable
          emojiList={this.state.filteredEmojiList}
        />
      </div>
    );
  }
}

export default App;
