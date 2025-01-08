// src/validations/registerValidation.js
import { required, email, maxLength, minLength, helpers } from '@vuelidate/validators'

// Define validation rules
export const registerRules = {
  firstName: {
    required,
    maxLength: maxLength(50),
  },
  lastName: {
    required,
    maxLength: maxLength(50),
  },
  email: {
    required,
    email,
  },
  username: {
    required,
    maxLength: maxLength(50),
    unique: helpers.withMessage('El nombre de usuario ya existe', (value) => {
      const users = JSON.parse(localStorage.getItem('users')) || []
      return !users.some((user) => user.username === value)
    }),
  },
  password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(12),
    validPassword: helpers.withMessage('Contraseña debe contener solo letras y números', (value) =>
      /^[a-zA-Z0-9]+$/.test(value),
    ),
  },
}
