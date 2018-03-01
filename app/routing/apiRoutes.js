// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// export for use in server.js
module.exports = function(app) {

	// This will be used to display a JSON of all possible friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// This will be used to handle incoming survey results
	app.post("/api/friends", function(req, res) {

		// if the user submits complete survey, we have a new friend
    var newFriend = req.body;
    // add to the friends array
    if (newFriend) {
    	friends.push(newFriend);
    }

    // route will also be used to handle the compatibility logic
		// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
		results = [];
		// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
		// Example: 
		// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
		// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
		// Total Difference: 2 + 1 + 2 = 5

		// initialize matchScore
		var matchScore = 0;

		// loop through all friends
		for (var i = 0; i < friends.length; i++) {
			// also loop through all friends' scores
			for (var j = 0; j < friends[i].scores.length; j++) {
				// Remember to use the absolute value of the differences.
				matchScore += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
			}
			results.push(matchScore);
		}
		// The closest match will be the user with the least amount of difference.
		var newBFF = friends[results.indexOf(Math.min(results))].name;

    return res.json(friends);

	});
}