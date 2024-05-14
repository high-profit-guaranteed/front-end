import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import commonStyles from './commonStyles.jsx';
import Board from './Channel_page/boardlist';

const styles = {
  container: {
    ...commonStyles.container,
  },
};

function Channel() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <Board />
      </div>
    </div>
  );
}

export default Channel;
