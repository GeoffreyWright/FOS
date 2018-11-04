'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ event }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.get_restaurant_list = async (event, context) => {
  const restaurant_list = [
    {
      name: "Pizza Heaven",
      food: "pizza",
      tags: ["pizza"]
    },
    {
      name: "Boston Pizza",
      food: "pizza",
      tags: ["pizza"]
    },
    {
      name: "Earls",
      food: "bar and grill",
      tags: ["earls", "steak", "ribs", "bar"]
    },
    {
      name: "Sushi Han",
      food: "sushi",
      tags: ["japanese", "sushi", "ramen"]
    }
  ]
  return {
    statusCode: 200,
    body: JSON.stringify({
      restaurant_list
    }, null, 2),
  }
};

module.exports.get_food_list = async (event, context) => {
  const food_list = [
    {
      food: "Pizza",
      restaurants: ["Piiza Hut", "Dominos", "Little Pizza Heaven"],
      tags: ["pizza", "breadsticks", "calzones"]
    },
    {
      food: "Burgers",
      restaurants: ["Nuburger", "McDonald's", "Arby's"],
      tags: ["burgers", "fries", "milk shakes"]
    },
    {
      food: "steak",
      restaurants: ["Earls", "The Keg", "Joey's"],
      tags: ["steak", "prime rib", "filet mignon"]
    }
  ]
  return {
    statusCode: 200,
    body: JSON.stringify({
      restaurant_list
    }, null, 2),
  }
};