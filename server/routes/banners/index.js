import express from 'express';
import {
	createNewBanner,getPaginatedBanners
} from '../../controller/banners/index.js';
import { authorizer, isAdmin } from '../../helpers/authorizer/index.js';
const bannerRouter = express.Router();


bannerRouter.post('/banner/create', authorizer(), createNewBanner);
bannerRouter.get('/banner/paginated/', authorizer(), getPaginatedBanners);
export default bannerRouter;
