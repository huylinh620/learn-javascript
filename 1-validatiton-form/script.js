const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let message = []
  if (name.value === '' || name.value === null) {
    message.push('Name is required')
  }

  if (password.value.length <= 6) {
    message.push('Password must be longer than 6 character')
  }

  if (password.value.length >= 20) {
    message.push('Password must be less than 20 character')
  }

  if (password.value === 'password') {
    message.push('Password cannot password')
  }

  if (message.length > 0) {
    e.preventDefault()
    errorElement.innerHTML = message.join(', ')
  }
})
