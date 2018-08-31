# GraphQL Workshop Notes

Hosted at @MSFTReactor in San Francisco
Thursday, August 30th 2018

---

## Technology Requirements

- `create-react-app`
- Node Version 10.0
- VSCode

* Check out `github.com/chentsulin/awesome-graphql` for some awesome resources for GraphQL.

- When building an application similar to Facebook, we may need to build a component that needs just the number of events that the user is attending. To do this, we would need to create a new end point or we over fetch data. Another situation is when we need to display a friend and the number of mutal friends that we have in common however, this would require us to hit an end point over and over again to get this information (We call this underfetching, since we need to make multiple requests to an endpoint to achieve the desired result.)

- Queries are pretty much `GET` requests
- Mutations are equivalent of `POST` or `PUT` request
