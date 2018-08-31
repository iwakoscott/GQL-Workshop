const { graphql, buildSchema } = require("graphql");
const axios = require("axios");

// You don't need to cascade the Types before using them as long as you define them somewhere in the file
const schema = buildSchema(`
    type Team {
        id: ID
        name: String
        points: String
    }
    type Query {
        teams: [Team]
    }
    type Mutation {
        incrementPoints(id:ID!):Team
    }
`);

const root = {
  teams: obj => {
    return axios
      .get("https://graphqlvoting.azurewebsites.net/api/score")
      .then(res => res.data);
  }
};

graphql(
  schema,
  `
    query {
      teams {
        id
        name
        points
      }
    }
  `,
  root
).then(res => console.log(JSON.stringify(res)));
