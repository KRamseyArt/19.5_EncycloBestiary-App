export default {
  "users": [
    {
      "id": 1,
      "username": "TestUser1",
      "email": "username@test.com",
      "password": "Password123",
      "about_me": "A little bit about TestUser1"
    },
    {
      "id": 2,
      "username": "TestUser2",
      "email": "testaccount@test.com",
      "password": "Test123Pass",
      "about_me": "TestUser2 is such an interesting fellow"
    },
    {
      "id": 3,
      "username": "TestUser3",
      "email": "email@test.com",
      "password": "987LogIn",
      "about_me": "Not much to say about TestUser3"
    },
  ],
  "bestiaries": [
    {
      "id": 1,
      "user_id": 1,
      "bestiary_name": "The Test of Oz",
      "bestiary_description": "Foo Bar Buzz"
    },
    {
      "id": 2,
      "user_id": 1,
      "bestiary_name": "Another Test",
      "bestiary_description": "Test 2"
    },
    {
      "id": 3,
      "user_id": 2,
      "bestiary_name": "It's all Beans",
      "bestiary_description": "Too many beans!!!"
    }
  ],
  "bestiary_data": [
    {
      "id": 1,
      "user_id": 1,
      "bestiary_id": 1,
      "data_name": "Lion",
      "data_description": "Red"
    },
    {
      "id": 2,
      "user_id": 1,
      "bestiary_id": 1,
      "data_name": "Tiger",
      "data_description": "Blue"
    },
    {
      "id": 3,
      "user_id": 1,
      "bestiary_id": 1,
      "data_name": "Bear",
      "data_description": "Green"
    },
    {
      "id": 1,
      "user_id": 2,
      "bestiary_id": 3,
      "data_name": "Pinto",
      "data_description": "Good"
    },
    {
      "id": 2,
      "user_id": 2,
      "bestiary_id": 3,
      "data_name": "Black",
      "data_description": "Great"
    },
    {
      "id": 3,
      "user_id": 2,
      "bestiary_id": 3,
      "data_name": "Jumping",
      "data_description": "Interesting"
    },
    {
      "id": 4,
      "user_id": 2,
      "bestiary_id": 3,
      "data_name": "Chickpea",
      "data_description": "Savory"
    },
    {
      "id": 5,
      "user_id": 2,
      "bestiary_id": 3,
      "data_name": "Kidney",
      "data_description": "Smokey"
    }
    
  ]
}