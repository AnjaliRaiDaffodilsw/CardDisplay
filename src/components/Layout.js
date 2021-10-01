import React, { Component } from 'react';

import Cards from './Card';
import '../assets/styles/Layout.css';

export class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onToggleView: [true, true, true],
      cardTitle: ['Personal Details', 'Education Details', 'Work Details'],
      detailsCard: [
        {
          Name: 'Anjali Rai',
          Age: '23',
          Gender: 'Female',
        },
        {
          X: 'CBSE Board - 91.2%',
          XII: 'CBSE Board - 78.3%',
          Graduation: 'AKTU - 86.7%',
        },
        {
          Skills: 'HTML,CSS,JS,React',
          Internship: 'Trainee at Daffodils software'
        }
      ]
    };
  }

toggleViewHandler = (num) => {
  const newIds = this.state.onToggleView.slice();
  for (let i = 0; i < newIds.length; i += 1) {
    if (i !== num) {
      newIds[i] = true;
    }
  }
  this.setState({ onToggleView: newIds });
  this.setState((prevState) => {
    const newItems = [...prevState.onToggleView];
    newItems[num] = !newItems[num];
    return { onToggleView: newItems };
  });
}

render() {
  return (
<div className="card-container">
{
this.state.detailsCard.map((detailsObj, idx) => <Cards
key={idx}
toggleViewHandler={this.toggleViewHandler}
onToggleView={this.state.onToggleView[idx]}
personalCardObject={detailsObj}
cardTitle={this.state.cardTitle[idx]}
view={idx}
/>

)
}
</div>
  );
}
}

export default Layout;
