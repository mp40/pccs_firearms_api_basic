const m1Garand = {
  id: 1,
  name: "M1 Garand",
  kd: 11,
  aim_ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
  aim_mod: [-23, -13, -9, -8, -6, -5, -4, -3, -2, -1, 0]
};

const m1Carbine = {
  id: 2,
  name: "M1 Carbine",
  kd: 5,
  aim_ac: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  aim_mod: [-21, -11, -9, -7, -6, -4, -3, -2, -2, -1, 0]
};

const m1911 = {
  id: 3,
  name: "M1911A1",
  kd: 3,
  aim_ac: [1, 2, 3, 4, 5, 6],
  aim_mod: [-17, -11, -10, -9, -8, -7]
};

const guns = [m1Garand, m1Carbine, m1911];

module.exports = { guns };
