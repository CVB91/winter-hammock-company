import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getUserOrders, getOrders,updateOrderToDispatched
} from '../controllers/orderController.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders )
router.route('/myorders').get(protect,getUserOrders )
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/dispatch').put(protect, admin, updateOrderToDispatched);
export default router;
