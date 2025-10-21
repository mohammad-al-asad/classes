import { Router } from 'express';
import { assignLicenseKey, createDigitalProduct, deleteDigitalProduct, generateLicenseKeys, getDigitalProduct, getDigitalProducts, getFeaturedProducts, getProductsByType, getProductStats, updateDigitalProduct, updateProductVersion } from './digitalProduct.controller.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';
import { roleValidation } from '../../middleware/roleValidation.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { DigitalProductSchema } from './digitalProduct.validation.js';

const digitalProductRouter = Router();

// Public routes
digitalProductRouter.get('/', getDigitalProducts);
digitalProductRouter.get('/featured', getFeaturedProducts);
digitalProductRouter.get('/type/:type', getProductsByType);
digitalProductRouter.get('/:id', getDigitalProduct);

// Protected routes (instructor/admin)
digitalProductRouter.use(authMiddleware);
digitalProductRouter.post('/:id/assign-license', assignLicenseKey);

// Admin/instructor only routes
digitalProductRouter.use(authMiddleware, roleValidation("instructor"));
digitalProductRouter.post('/', validateRequest(DigitalProductSchema), createDigitalProduct);
digitalProductRouter.put('/:id', updateDigitalProduct);
digitalProductRouter.put('/:id/version', updateProductVersion);
digitalProductRouter.post('/:id/generate-keys', generateLicenseKeys);

// Admin only routes
digitalProductRouter.use(authMiddleware, roleValidation("admin"));
digitalProductRouter.delete('/:id', deleteDigitalProduct);
digitalProductRouter.get('/admin/stats', getProductStats);

export default digitalProductRouter;