import React, { Component } from 'react';

import '../assets/styles/Layout.css';
import PropTypes from 'prop-types';
import CardDetail from './CardDetails';

export class Card extends Component {
  render() {
    const {
      onToggleView,
      toggleViewHandler,
      personalCardObject,
      cardTitle,
      view
    } = this.props;
    return (
<>
<div
role="button"
onClick={() => toggleViewHandler(view)}
className={`${onToggleView ? 'card-box' : 'new-card-box'}`}
>
{
onToggleView
  ? <h1>{cardTitle}</h1>
  : Object.entries(personalCardObject).map((entry) => {
    const titleKey = entry[0];
    const titleValue = entry[1];
    return (
<CardDetail
key={Math.random()}
titleKey={titleKey}
titleValue={titleValue}
/>
    );
  })
}
</div>
</>
    );
  }
}

Card.propTypes = {
  onToggleView: PropTypes.bool,
  toggleViewHandler: PropTypes.func,
  personalCardObject: PropTypes.object,
  cardTitle: PropTypes.string,
  view: PropTypes.number,
};

export default Card;
