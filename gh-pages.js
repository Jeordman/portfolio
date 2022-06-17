var ghpages = require('gh-pages');

ghpages.publish(
    "public", // path to public directory
    {
        branch: "master",
        repo: "https://github.com/Jeordman/portfolio.git",
        user: {
            name: "Jeordin Callister",
            email: "callisterjeordin@gmail.com",
        },
    },
    () => {
        console.log("Deploy Complete!");
    }
);
