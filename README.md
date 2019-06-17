# HYP's Events Component ~ WHAT IS HYP?

**HYP** is the prototype of a web app that aims to improve communication between students and school..

Site's link: [HYP](https://happy-beaver-hyp.netlify.com/) <br/>
Repository's link: [GitHub-Hyp](https://github.com/icate95/HYP2)

In this documentation I will illustrate the realization of the **events page** .

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
```
