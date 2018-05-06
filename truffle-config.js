module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "10.89.202.73",
      port: 8546,
      network_id: "*" // Match any network id
    }
  }
};
