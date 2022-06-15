import express from "express";
import {
    getAll,
    insert,
    _delete
} from '../service/donations.js'
import auth from '../middleware/authentication.js'

const Router = express.Router();

Router.get('/', async (req, res) => {
    const donations = await getAll()
  
    if (donations) {
        res.json({ message: profiles, status: 'success' })
    } else {
        res.json({ message: 'an Error occured', status: 'danger' })
    }
  })

  Router.post("/donate", auth, async (req, res) => {
    if(await insert(req.body)) {
      res.json({status: 'success', message: 'Donation was sent'})
  } else {
      res.json({status: 'danger', message: 'Error'})
  }  
  })

  Router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      await _delete(id);
      res.json({ status: "success", message: "Comment was deleted" });
    } catch {
      res.json({ status: "danger", message: "Deleting comment unsuccesfull" });
    }
  });

  export default Router;
