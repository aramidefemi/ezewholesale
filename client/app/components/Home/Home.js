import React, { Component } from 'react';
import img from '../../../public/assets/img/iphone_11_pro_max.png';
import FilterComponent from './widgets/filter';
import CardComponent from './widgets/card';
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
                <button className='btn btn-primary' >SEARCH</button>
              </div>
            </div>
          </div>
          {/* <div className='col-md-6'>
              <img  src={img} />
          </div> */}
        </div>

        <div className=' mt-5'>
          <div className='row'>
            <div className='col-md-3'>
              <FilterComponent />
            </div>
            <div className='col-md-9'>
              <div className='row'>
                <div className='col-md-4'>
                  <CardComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
