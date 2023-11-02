const express = require('express');
const axios = require('axios');
const app = express();
const linkedIn = require("./linkedin");
const port = 3000; // You can choose a different port if needed

// Define a route for getting LinkedIn jobs with query parameters
app.get('/linkedin-jobs', async (req, res) => {
  try {
    const queryOptions = {
      keyword: req.query.keyword || "Software Engineer",
      location: req.query.location || "",
      dateSincePosted: req.query.dateSincePosted || "past Week",
      jobType: req.query.jobType || "full time",
      remoteFilter: req.query.remoteFilter || "remote",
      salary: req.query.salary || "100000",
      experienceLevel: req.query.experienceLevel || "entry level",
      limit: req.query.limit || "10",
      sortBy: req.query.sortBy || "recent",
    };

    // const response = await linkedInQuery(queryOptions);
    linkedIn.query(queryOptions).then((response) => {
        //console.log(response); // An array of Job objects
        res.json(response);
      });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching LinkedIn jobs' });
  }
});

// LinkedIn query function
async function linkedInQuery(queryOptions) {
  // Your LinkedIn query logic using the "linkedIn" module or Axios here
  // Replace the following with your LinkedIn query implementation
  // For example, using Axios to make a request to the LinkedIn API
  const response = await axios.get('https://api.linkedin.com/jobs', {
    params: queryOptions,
    // Add any required headers and authorization here if needed
  });
  return response.data; // Modify as per your LinkedIn API response format
}

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
