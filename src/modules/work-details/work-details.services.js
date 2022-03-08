const { WorkDetail } = require("../../models/WorkDetail");
const { User } = require("../../models/User");

async function getUserWorkDetails({ userId }) {
  const res = await WorkDetail.findAll({
    where: {
      userId,
    },
  });
  console.log(res);
  return res;
}

module.exports = {
  getUserWorkDetails,
};
