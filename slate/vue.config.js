// TODO: I highly recommend using variables inside .env file for storing backend and Ajax base URLs, since the value will be different during production.

module.exports = {
  devServer: {
    proxy: 'https://y9dzb96swk.execute-api.us-west-2.amazonaws.com/dev/',
  }
}