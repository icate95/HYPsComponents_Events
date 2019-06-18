# HYP's Events Component ~ WHAT IS HYP?

**HYP** is the prototype of a web app that aims to improve communication between students and school..

Site's link: [HYP](https://happy-beaver-hyp.netlify.com/) <br/>
Repository's link: [GitHub-Hyp](https://github.com/icate95/HYP2)

In this documentation I will illustrate the realization of the **events page**.

#

## HOW DOES HYP WORKS?

For the development of this project it was decided to use **[REACT](https://reactjs.org/)** for the frontend part and **[STRAPI](https://strapi.io/documentation/3.0.0-beta.x/)** for the backend part.

In the Events page we get the API from the dashboard in the school hall.
The dasboard is build in WordPress. All we needed is to build the request to the [REST API](https://developer.wordpress.org/rest-api/).

## START

### What you need

- a React project
- a WordPress website

### Find your WordPress API

You can find your JSON adding `wp-json/wp/v2/posts/` at your website' URL.

### Fetch the JSON in the Component

That's what your constactor need to be

```js
constructor() {
    super();
    this.state = {
      data1: [],
      data2: []
    };

    Promise.all([
      fetch("[your wordpress site]/wp-json/wp/v2/posts/").then(
        data1 => data.json()
      ),
      fetch("[your wordpress site]/wp-json/wp/v2/media/").then(
        data2 => media.json()
      )
    ]).then(([data1, data2]) => {
      this.setState({
        data1,
        data2
      });
      console.log(this.state);
    });
  }
```
if your site use the Advanced Custom Field Plugin 

```js
constructor() {
    super();
    this.state = {
      data1: [],
      data2: [],
      data3: []
    };

    Promise.all([
      fetch("[your wordpress site]/wp-json/wp/v2/posts/").then(
        data1 => data.json()
      ),
      fetch("[your wordpress site]/wp-json/wp/v2/media/").then(
        data2 => media.json()
      ),
      fetch("[your wordpress site]/dashboard/wp-json/acf/v3/posts").then(
        data3 => data.json()
      )
    ]).then(([data1, data2, data3]) => {
      this.setState({
        data1,
        data2,
        data3
      });
      console.log(this.state);
    });
  }
```
what you component need to be

```js

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
```
[that's an example!](https://hyps-events.netlify.com/) <br/>
Style from [Responsive, Animated Infographic Card using Flexbox](https://codepen.io/prasad-d/pen/dEeYea?editors=1000)
