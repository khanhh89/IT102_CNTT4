function displayUserInfo(user) {
  const {
    name = "unknown",
    age = "unknown",
    location: { city = "unknown", country = "unknown" } = {},
    job: { title = "unknown", company = "unknown" } = {},
    contact: { email = "unknown", phone = "unknown" } = {}
  } = user;

  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}

console.log(displayUserInfo({
  name: "John",
  age: 50,
  location: {
    city: "Hanoi",
    country: "Vietnam"
  },
  contact: {
    email: "john@example.com",
    phone: "0123456789"
  }
}));