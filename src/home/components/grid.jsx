import React, { Component } from 'react';

class PeopleGrid extends Component{
    constructor(props){
        super(props);
        this.data = this.props.data;
    }

    render(){
        return <section className="Team" id="team" class="team">
        <div class="container">
          <div class="section-title">
            <h2>Guru Dan Staff</h2>
            <p>Sit sint consectetur velit quos quisquam cupiditate nemo qui</p>
          </div>
  
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch"></div>
                {
                    this.data.array.forEach(item =>{
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
                        })
                }
            </div>
        </div>
      </section>;
    }
}
