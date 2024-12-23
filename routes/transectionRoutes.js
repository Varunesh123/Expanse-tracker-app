import express from "express";
import { 
    addTransection, 
    getAllTransection, 
    editTransection, 
    deleteTransection 
} from "../controllers/transectionCtrl.js";

const router = express.Router();

router.post("/add-transection", addTransection);
router.post("/edit-transection", editTransection);
router.post("/delete-transection", deleteTransection);
router.post("/get-transection", getAllTransection)

export default router;