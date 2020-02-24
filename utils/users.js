const users = [
  {
    "id": "4e60b855a01ec2765f97c9c9e75b0315",
    "username": "test1",
    "password": "123",
    "full_name": "Test user 1"
  },
  {
    "id": "110ab5768c1d337818dfe55064ebfa12",
    "username": "test2",
    "password": "123",
    "full_name": "Test user 2"
  },
  {
    "id": "c38fcf71272216468ac57a59d3a3facd",
    "username": "test3",
    "password": "123",
    "full_name": "Test user 3"
  }
]

module.exports = {
  byId: (id, cb) => {
    const user = users.find(u => u.id.toLowerCase() === id.toLowerCase())
    if(user) {
      return cb(null, user)
    }
    return cb("Can´t find that user!")
  },
  byCredentials: (username, password) => (users.find(u => u.username === username && u.password === password) || {}).id
}