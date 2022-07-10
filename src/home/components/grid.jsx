import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PeopleGrid extends Component{
    constructor(props){
        super(props);
        this.data = this.props.data;
        this.state = {
          searchStr: ''
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(onChanged){
      this.state({searchStr: onChanged});
    }

    render(){
        return <section className="Team" id="team" class="team">
        <div class="container">
          <div class='section-title'>
            <h2>Guru Dan Staff</h2>
            <div class="row">
            <div class="col-12">
            <div class="input-group">
                <input class="form-control py-2" type="text" placeholder='search'/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                    <FontAwesomeIcon icon="search" />
                    </button>
                </div>
            </div>
        </div>
            </div>
          </div>
  
          <div class="row">
                {
                  
                    this.data.map(item => (
                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member">
                          <img src={item.imgUrl} alt="" />
                          <h4>{item.name}</h4>
                          <span>{item.title}</span>
                          <p>{item.desc}</p>
                          <div class="social">
                            {item.twitter == null ? <div></div> : <a href="">
                              <i class="bi bi-twitter">@{item.twitter}</i>
                            </a>}
                            {item.facebook == null ? <div></div> : <a href="">
                              <i class="bi bi-facebook">{item.facebook}</i>
                            </a>}
                            {item.instagram == null ? <div></div> : <a href="">
                              <i class="bi bi-instagram">@{item.instagram}</i>
                            </a>}
                          </div>
                        </div>
                      </div>     
                    ))
                }
            </div>
        </div>
      </section>;
    }
}

export default PeopleGrid;