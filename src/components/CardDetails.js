import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class CardDetails extends Component {
  render() {
    const { titleKey, titleValue } = this.props;
    return (
<div>
<p>{titleKey} :   {titleValue}</p>
</div>
    );
  }
}

CardDetails.propTypes = {
  titleKey: PropTypes.string,
  titleValue: PropTypes.string,
};

export default CardDetails;
