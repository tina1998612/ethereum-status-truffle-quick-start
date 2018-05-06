module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "<machine_ip>",
      port: 8546,
      network_id: "*" // Match any network id
    }
  }
};
