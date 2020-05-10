import React, { Component } from 'react';
import img from '../../../public/assets/img/iphone_11_pro_max.png';
import FilterComponent from './widgets/filter';
import CardComponent from './widgets/card';
import SearchComponent from './widgets/search';
import BasicPagination from './widgets/paginate';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payload: { results: null, count: 0 },
      paginate: {
        limit: 12,
        page: 0
      },
      filter: {}
    };
    this.search = this.search.bind(this);
    this.updatePagination = this.updatePagination.bind(this);
  }

  componentDidMount() {
    fetch(`api/products/sellrequests?limit=${this.state.paginate.limit}&page=${this.state.paginate.page}`)
      .then(res => res.json())
      .then(json => {
        var currentState = this.state;
        var newState = {

          ...currentState,
          payload: json
        }
        this.setState(newState);
      });
  }

  search(data) {
    var currentState = this.state;
    var newState = {
      ...currentState,
      filter: data
    }
    this.setState(newState, () => {
      fetch(`api/products/sellrequests?limit=${this.state.paginate.limit}&page=${this.state.paginate.page}`, {
        method: 'POST', body: JSON.stringify(this.state.filter), headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          var currentState = this.state;
          var newState = {
            ...currentState,
            payload: json,
          }
          this.setState(newState);
        });
    });
  }

  updatePagination(page) {
    var paginate = {
      limit: 12,
      page: page || 0
    };
    var currentState = this.state;
    var newState = {
      ...currentState,
      paginate,
    }
    this.setState(newState, () => {
      this.search(this.state.filter);
    });

  }


  render() {

    return (
      <div className='body'>

        <div className='header row'>
          <div className='col-md-6'>
            <h1>Shop our latest <br /> available stock here</h1>
            <SearchComponent action={this.search} />
          </div>
          <div className='col-md-6'>
            <img className='text-center' src={img} />
          </div>
        </div>

        <div className=' mt-5'>
          <div className='row'>
            <div className='col-md-3'>
              <FilterComponent action={this.search} />
            </div>
            <div className='col-md-9'>
              <div className='row px-4'>
                {
                  this.state.payload.results == null ? (<div className='floatCenter'> <CircularProgress /> </div>) :
                    this.state.payload.results.length <= 0 ?
                      <h1 className='text-center mt-5'>Sorry search results not found</h1>
                      :
                      this.state.payload.results.map((item, i) => {
                        return (
                          <div key={i} className='col-md-3'>
                            <CardComponent data={item} />
                          </div>
                        )
                      })
                }
              </div>
              <div className='row px-4  mb-5'>
                <div className='floatCenter'>
                  <BasicPagination count={this.state.payload.count / this.state.paginate.limit} page={this.state.paginate.page} action={this.updatePagination} />
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
