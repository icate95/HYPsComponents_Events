import React from "react";
// import Header from "./../components/Header";
// import "./Eventi.css";

// import Loader from "./../components/Loader";
// import img_sostitutiva from "./../icone/mohole.jpg";

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
          <div class="card-count">{this.props.k}</div>
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
      fetch("http://sito-demo-api.ianesellicaterina.me/wp-json/wp/v2/posts/").then(
        data => data.json()
      ),
      fetch("http://sito-demo-api.ianesellicaterina.me/wp-json/wp/v2/media/").then(
        media => media.json()
      )
    ]).then(([posts, media]) => {
      this.setState({
        posts,
        media,
        loading: false
      });
      console.log(this.state);
    });
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const cards = this.state.posts.map((p, i) => {
      const featured = this.state.media.find(
        media => p.featured_media === media.id
      );

      return (
        <Card
          key={i}
          title={p.title.rendered}
          img={featured ? featured.source_url : <p> iim</p>}
          altImg="alt"
          excerpt={p.excerpt.rendered}
        />
      );
    });
    return (
      <div className="content">
        {this.state.loading ? <p>Caricamento</p> : ""}
        {/* <Header  titoloPagina='Eventi'/> */}
        <div class="card-container">{cards}</div>
      </div>
    );
  }
}

export default Eventi;
