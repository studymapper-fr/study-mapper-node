const { WorkDetail } = require("../../models/WorkDetail");

async function getUserWorkDetails({ userId }) {
  const res = await WorkDetail.findAll({
    where: {
      userId,
    },
  });
  return res;
}

async function createUserWorkDetail({ userId, data }) {
  const formattedData = data.map((item) => ({
    ...item,
    startDate: new Date(item.startDate),
    endDate: new Date(item.endDate),
    userId,
  }));

  const res = await WorkDetail.bulkCreate(formattedData);
  return res;
}

module.exports = {
  getUserWorkDetails,
  createUserWorkDetail,
};
