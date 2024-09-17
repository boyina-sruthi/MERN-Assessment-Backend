import { Router } from "express";
import {createEmployee,updateEmployee,deleteEmployee,findAllEmployees,findEmployeeById } from "../controller/EmployeeController.js"

const router=Router();

router.get('/employees',findAllEmployees)
router.get('/employee/:id',findEmployeeById)
router.post('/createEmployee',createEmployee);
router.put('/editEmployee/:id',updateEmployee);
router.delete('/deleteEmployee/:id',deleteEmployee);

export default router