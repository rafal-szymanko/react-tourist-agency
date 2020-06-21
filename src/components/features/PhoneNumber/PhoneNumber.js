import React from 'react';
import styles from './PhoneNumber.scss';

class PhoneNumber extends React.Component {
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }
  
  getCurrentlyUTCTime(){
    const currentTime = new Date();
    return Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(),currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds());
  }

  getRenderedMessage() {

    const currentTime = new Date();

    const amandaStartShift = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 8, 0, 0);
    const amandaEndShift = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0);

    const tobiasStartShift = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0);
    const TobiasEndShift = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 16, 0, 0);
    
    const helenaStartShift = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 16, 0, 0);
    const helenaEndShift = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 22, 0, 0);


    if(this.getCurrentlyUTCTime() >= amandaStartShift && this.getCurrentlyUTCTime() < amandaEndShift) {
      return 'Amanda, 678.243.8455';
    } else if(this.getCurrentlyUTCTime() >= tobiasStartShift && this.getCurrentlyUTCTime() < TobiasEndShift) {
      return 'Tobias, 278.443.6443';
    } else if (this.getCurrentlyUTCTime() >= helenaStartShift && this.getCurrentlyUTCTime() < helenaEndShift) {
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