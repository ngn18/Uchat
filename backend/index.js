const express = require("express");
const cors = require("cors");
const axios = require("axios").default;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "6e65195a-720b-47b9-8a3c-1dea4f91ce05" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response?.status || 500).json(e.response?.data || e.message);
  }
});

app.listen(3001);
console.log("Listening on Port 3001");