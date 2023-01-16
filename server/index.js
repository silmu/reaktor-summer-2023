const server = require("./src/server");

const PORT = process.env.PORT || 3090;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
