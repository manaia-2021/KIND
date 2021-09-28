module.exports = {
  generateUsername,
  getRandomAvatar
}

// returns a randomly generated username
function generateUsername () {
  const a = ['Brave', 'Calm', 'Nice', 'Lonely', 'Smart', 'Witty', 'Proud', 'Alert', 'Bizarre', 'Bright', 'Capable', 'Clever', 'Curious', 'Elegant', 'Fabulous', 'Graceful']
  const b = ['Sky', 'Mountain', 'Banana', 'Bear', 'River', 'Stream', 'Garden', 'Tree', 'Parrot', 'Cat', 'Sock', 'Ship', 'Hero', 'Monkey', 'Kangaroo']

  const randomA = Math.floor(Math.random() * a.length)
  const randomB = Math.floor(Math.random() * b.length)

  const name = a[randomA] + b[randomB]

  return name
}

// Returns an image url for a random avatar
function getRandomAvatar () {
  const randomSeed = getRandomInt(1000)

  const url = `https://avatars.dicebear.com/api/jdenticon/${randomSeed}.svg`
  return url
}

// returns a random int
function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}
