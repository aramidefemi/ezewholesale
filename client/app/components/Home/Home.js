import React, { Component } from 'react'; 
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {
    // fetch('/api/counters')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       counters: json
    //     });
    //   });
  }



  render() {
    return (
      <div className='body'>

        <div className='header row'>
          <div className='col-md-6 '>
            <h1>Shop our latest <br /> available stock here</h1>
            <div className='form row mt-4'>
              <div className='col-md-9'>
                <input className='form-control' placeholder='search' />
              </div>
              <div className='col-md-3 p-0'>
                <button className='btn btn-primary' >SEARCH -></button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
              <img  src={'../../../public/assets/img/iphone_11_pro_max.png'} />
          </div>
        </div>

        <div className='container'>
          <h1>Hello Man!</h1>
        </div>
      </div>
    );
  }
}

export default Home;
