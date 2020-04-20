import React from 'react';
import PacmanLoading from './pacman-loading';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('keypress', (e) => { if(e.keyCode === 13) this.registerClick() });
  }

  registerClick() {
    this.setState({loading: true}); // lottie on
    setTimeout(() => this.props.history.push('/about'), 2400)
  }

  componentWillUnmount() {
    document.body.removeEventListener('keypress', (e) => { if(e.keyCode === 13) this.registerClick() });
  }



  render () {
    return(
      <div className='background'>
        <div className="center welcome-div" name="header_div">
          <h1 className='paragraph welcome text-center'>Welcome to<br/>robreutiman.com!</h1>
        </div>
        { !this.state.loading && (
          <div className="center welcome-div" name="paragraph_div">
            <p className='paragraph welcome text-center'>Press <span className='blink teal'>enter</span></p>
          </div>
        )}
        { this.state.loading && (
          <div className="center" name="pacmanWrapper">
            <PacmanLoading/>
          </div>
        )}
      </div>
    );
  }
}

export default Welcome;