export function authenticate (email, password) {
  // Make request to auth endpoint if this was for real, but it's not :)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Nguyen Trong Phat',
        dateOfBirth: '01/01/1998',
        email: 'phatnguyen876@gmail.com',
        secretQuestion: 'Joji?',
        secretAnswer: 'Mr.Hollywood'
      })
    }, 2500)
  })
}
