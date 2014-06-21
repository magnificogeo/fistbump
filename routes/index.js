var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/**
* GET ROUTES BELOW
*/

/**
* Retrieve profile stack on pull-to-refresh
* @author George
*/ 
router.get('/getStack', function(req, res) {

	/**
	* Profile cards/stacks are cached locally on client side as well. Refreshed when there are changes or
	* when user pull-to-refresh. Purged after X amount of time on local cache.
	*/

	if (req.query.event_token == "abc" ) { //@TODO: write query database to match event token

		var profile_stack = []; // @TODO: Write models, Query mongodb, cache these queries
		var profile_stack_mockup = [{
			profile_name : "George Moh",
			profile_title : "Software Engineer at Liquor.com",
			profile_tagline : "Internet entrepreneur looking to set up the next .com"
		},
		{
			profile_name : "Oh Joo Siong",
			profile_title : "Regional Sales and Business Development Manager at PROTAG",
			profile_tagline : "Technology entrepreneur looking for business contacts with expertise in industrial design."
		},
		{
			profile_name : "Ian Loke",
			profile_title : "Software Engineer at Appington",
			profile_tagline : "Fitness entrepreneur looking for a spotter (co-founder)."
		},
		{
			profile_name : "ABC",
			profile_title : "ABC",
			profile_tagline : "ABC"
		},
		{
			profile_name : "DEF",
			profile_title : "DEF",
			profile_tagline : "DEF"
		},
		{
			profile_name : "GHI",
			profile_title : "GHI",
			profile_tagline : "GHI"
		},
		{
			profile_name : "JKL",
			profile_title : "JKL",
			profile_tagline : "JKL"
		},
		{
			profile_name : "MNO",
			profile_title : "MNO",
			profile_tagline : "MNO"
		},
		{
			profile_name : "PQR",
			profile_title : "PQR",
			profile_tagline : "PQR"
		},
		{
			profile_name : "STU",
			profile_title : "STU",
			profile_tagline : "STU"
		},
		{
			profile_name : "VWX",
			profile_title : "VWX",
			profile_tagline : "VWX"
		},
		{
			profile_name : "YZ",
			profile_title : "YZ",
			profile_tagline : "YZ"
		}];

		// return JSON here 
		res.json(profile_stack_mockup);

	} else {
		res.render('index', { title: "Wrong event password."});
	}

});

router.get('/contactCards', function(req, res) {

	/**
	* Contact cards are cached locally on client side as well. Refreshed when there are changes or
	* when user pull-to-refresh
	*/

	var contact_card_stack = []; // @TODO: Write models, Query mongodb, cache these queries
	var contact_card_stack_mockup = [{
		profile_name : "George Moh",
		profile_title : "Software Engineer at Liquor.com",
		profile_tagline : "Internet entrepreneur looking to set up the next .com",
		profile_event_met : "WWDC 2013"
	},
	{
		profile_name: "Ian Loke",
		profile_title : "Software Engineer at Appington",
		profile_tagline : "Fitness entrepreneur looking for a spotter (co-founder).",
		profile_event_met : "Google I/O 2014"
	}];

	// return JSON here
	res.json(contact_card_stack_mockup);

});

// END OF GET ROUTES

/**
* POST ROUTES BELOW
*/



/**
* PUSH NOTIFICATIONS HERE
*/ 
// END OF POST ROUTES

module.exports = router;
