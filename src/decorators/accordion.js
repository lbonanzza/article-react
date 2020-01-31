import React from "react";

export default (OriginalComponent) => class DecoratedComponent extends React.Component {

  state = {
    openAItemId: null
  };

  toggleOpenItem = (openItemId) => () => this.setState({openItemId});


  render() {
    return <OriginalComponent {...this.props}
    openItemId={this.state.openItemId}
    toggleOpenItem={this.toggleOpenItem}
    />
  }
}