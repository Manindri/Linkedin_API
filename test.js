const linkedIn = require("./linkedin");

const queryOptions = {
  keyword: "HR",
  location: "India",
  dateSincePosted: "past Week",
  jobType: "full time",
  remoteFilter: "remote",
  salary: "100000",
  experienceLevel: "entry level",
  limit: "10",
  sortBy: "recent",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});