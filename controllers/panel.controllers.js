// // require model Panel
// const Panel = require('../models/Panel')
// // add game to panel
// const addpanel = async (req, res) => {
//   try {
//     const newPanel = new Panel({ ...req.body })

//     const field = await Panel.findOne({ title: req.body.title })
//     if (field) {
//       res.status(400).send({ message: 'title already exist' })
//       return
//     }
//     const result = await newPanel.save()
//     res
//       .status(200)
//       .send({ message: 'game added successfully to the panel', result })
//   } catch (error) {
//     res.status(500).send({ message: `${error}` })
//   }
// }

// // delete game from panel
// const deletepanel = async (req, res) => {
//   const _id = req.params.id
//   try {
//     const result = await Panel.findOneAndDelete({ _id })
//     result
//       ? res.status(200).send({
//           response: result,
//           message: 'this game is deleted from the panel',
//         })
//       : res.send({ message: 'already deleted' })
//   } catch (error) {
//     res.status(404).send({ message: 'can not delete this game from the panel' })
//   }
// }

// module.exports = controllers = {
//   addpanel,
//   deletepanel,
// }
