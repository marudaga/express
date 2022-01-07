export const home = (req, res) => res.send("user home");

export const Id = (req, res) => {
  return res.send(`id: ${req.params.id}`);
};

export const edit = (req, res) => res.send("user edit profile");

export const join = (req, res) => res.send("join us");

export const login = (req, res) => res.send("login");
