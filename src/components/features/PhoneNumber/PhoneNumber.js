import React from 'react';
import styles from './PhoneNumber.scss';

class PhoneNumber extends React.Component {
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }
  

  getRenderedMessage() {

    const currentHour = new Date().getUTCHours();

    const shifts = {
      amanda: {
        start: 8,
        end: 12,
      },
      tobias: {
        start: 12,
        end: 16,
      },
      helena: {
        start: 16,
        end: 22,
      },
    };

    if(currentHour >= shifts.amanda.start && currentHour < shifts.amanda.end) {
      return 'Amanda, 678.243.8455';
    } else if(currentHour >= shifts.tobias.start && currentHour < shifts.tobias.end) {
      return 'Tobias, 278.443.6443';
    } else if (currentHour >= shifts.helena.start && currentHour < shifts.helena.end) {
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }
  
  render() {
    return (
      <span className={styles.phoneNumber}>{this.getRenderedMessage()}</span>
    );
  }
    
}
    
  
export default PhoneNumber;