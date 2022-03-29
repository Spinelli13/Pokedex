const LegendaryModel = require('../models/LegendaryModel');

const controller = {
  getOneLegendary: (request, response) => {
      let model = new LegendaryModel('123', 'Pineco', 'Bagworm', 'bug');
   return response.json(model);
  },
  getAllLegendaries: (request, response) => {
      const legendary1 = new LegendaryModel('123', 'Pineco', 'Bagworm', 'bug')
      const legendary2 = new LegendaryModel('321', 'Lazaro', 'Bagworm', 'bug')
      const legendary3 = new LegendaryModel('132', 'Ivens', 'Bagworm', 'bug')
      const legendary4 = new LegendaryModel('231', 'Bruno', 'Bagworm', 'bug')
      return response.json([
          legendary1, 
          legendary2, 
          legendary3, 
          legendary4
        ]
      );
  }
}

module.exports = controller;