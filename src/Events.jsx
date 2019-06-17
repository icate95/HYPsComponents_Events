import React from "react";
// import Header from "./../components/Header";
// import "./Eventi.scss";

// import Loader from "./../components/Loader";
import img_sostitutiva from "./icone/mohole.jpg";

class Loader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='caricamento'> 
        <p>In caricamento</p>
        </div>
    )}
}

class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="card" key={this.props.k}>
        <div class="card-count-container">
          <img src={this.props.img} alt={this.props.altImg} />
          <div class="card-count"
            dangerouslySetInnerHTML={{
              __html: this.props.calendar
            }}
          />
        </div>
        <div className="card-content">
          <h3>{this.props.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.excerpt
            }}
          />
        </div>
      </div>
    );
  }
}

class Eventi extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      posts: [],
      media: [],
      calendar: [],
      categories: []
    };

    Promise.all([
      fetch("https://moholepeople.it/dashboard/wp-json/wp/v2/posts/").then(
        data => data.json()
      ),
      fetch("https://moholepeople.it/dashboard/wp-json/wp/v2/media/").then(
        media => media.json()
      ),
      fetch("https://moholepeople.it/dashboard/wp-json/acf/v3/posts").then(
        data => data.json()
      )
    ]).then(([posts, media, calendar, categories]) => {
      this.setState({
        posts,
        media,
        calendar,
        categories,
        loading: false
      });
      console.log(this.state);
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  scrollCards(e) {
    // console.log(e.target)
    let cards = e.target.childNodes[2].childNodes;
    // console.log(cards)
    // let card = e.target.firstChild;
    // let cardHeight = e.target.firstChild.clientHeight;
    let cardHeight = cards.clientHeight;
    cards.forEach(c => {
      // console.log(c)
      // console.log('c offset letf '  +  c.offsetTop)
      let offsetBottom = c.offsetTop + cardHeight;
      // console.log('c offset right '+ offsetRight);
      let topContainer = e.target.scrollTop;
      let bottomContainer = e.target.scrollTop + window.screen.width;
      // console.log('cont offset left '+ leftContainer);
      // console.log('cont offset right '+ bottomContainer);
      if (topContainer < c.offsetTop && offsetBottom < bottomContainer) {
        console.log(c);
        // c.classList.add("focus");
      } else {
        // c.classList.remove("focus");
      }
    });
  }

  render() {
    const cards = this.state.posts.map((p, i) => {
      const featured = this.state.media.find(
        media => p.featured_media === media.id
      );
      const calendar = this.state.calendar.find(
        calendar => p.id === calendar.id
      );

      return (
        <Card
          key={i}
          title={p.title.rendered}
          img={featured ? featured.source_url : img_sostitutiva}
          altImg="alt"
          excerpt={p.excerpt.rendered}
          calendar={
            calendar
              ? calendar.acf.date_and_time
              : "DATA EVENTO NON SPECIFICATA"
          }
        />
      );
    });
    return (
      <div className="content" onScroll={this.scrollCards.bind(this)}>
        
        <div className="title-container"> <h1>Mohole's Event Dashboard</h1></div>
        {this.state.loading ? <Loader /> : ""}
        <div className="card-container">{cards}</div>
      </div>
    );
  }
}

export default Eventi;
