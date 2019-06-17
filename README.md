# HYP's Events Component

**HYP** is the prototype of a web app that aims to improve communication between students and school..

Site's link: [HYP](https://happy-beaver-hyp.netlify.com/) <br/>
Repository's link: [GitHub-Hyp](https://github.com/icate95/HYP2)

In this documentation I will illustrate the realization of the **events page** .

#

## USED TECHNOLOGY

For the development of this project it was decided to use **[REACT](https://reactjs.org/)** for the frontend part and **[STRAPI](https://strapi.io/documentation/3.0.0-beta.x/)** for the backend part.

In the Events page we get the API from the dashboard in the school hall. 
The dasboard is build in WordPress. All we needed is to build the request to the [REST API](https://developer.wordpress.org/rest-api/).
#

## START 

### What you need

- a React project
- a WordPress website

### Find your WordPress API

You can find your JSON adding `wp-json/wp/v2/posts/` at your website' URL



Once you have downloaded this Git, insert the **Login.jsx** and **Login.scss** files into the React folder inside src and then overwrite the **index.js** file.

![folder](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/folder.png)

To make sure that everything works we still need to make **two changes**

* Enter the ** Strapi ** backend and enter **Roles and Permission**> **Authenticated**> scroll the page, open the **Users Permission** curtain and enter the following fields in the Auth field.<br/>
  ![role](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/role.png)<br/> > ![Auth](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/authenticated.png) > ![User](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/userPermission.png) and checked the field ![Check](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/check.png)

* As a second step you need to replace the url with that of your database created in strapi (with ctrl + F look for the following word '[InsertUrlStrapi]').


**Once all these steps are done, everything will be ready. (Inside the file you will find comments explaining the functions)**

#### ENJOY YOURSELF!!!
