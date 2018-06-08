import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class EmojiTable extends Component {
    render() {
        const emojiList = this.props.emojiList;
        console.log(emojiList[0]);
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Emoji</th>
                        <th>Name</th>
                        <th className="hidden-sm hidden-xs">Keywords</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emojiList.map((emoji, index) => {
                            return (
                                <tr key={index}>
                                    <td>{emoji.char}</td>
                                    <td>{emoji.name}</td>
                                    <td className="hidden-sm hidden-xs">{emoji.keywords}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

export default EmojiTable;