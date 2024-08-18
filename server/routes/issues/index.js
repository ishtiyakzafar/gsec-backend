import express from 'express';
import {
	createNewIssue,
	deleteIssue,
	getAllIssues,
	getIssueById,
	getPaginatedIssues,
	updateIssue,
	getIssueByCode,
	getAllInDemandIssues,
	getAllIssuesUpcoming,
	getAllGsecInDemandIssues,
	getIssuesByCodes
} from '../../controller/issues/index.js';
import { authorizer, isAdmin } from '../../helpers/authorizer/index.js';
const issuesRouter = express.Router();

issuesRouter.get('/issues/test', (req, res) => {
	console.log('/test /issues/test');
	res.send('/test /issues/test');
});

issuesRouter.post('/issue/create', authorizer(), createNewIssue);
issuesRouter.get('/issue/all', authorizer(), getAllIssues);
issuesRouter.get('/issue/in-demand', getAllInDemandIssues);
issuesRouter.get('/issue/paginated/', authorizer(), getPaginatedIssues);
issuesRouter.get('/issue/delete/:id', authorizer(), deleteIssue);
issuesRouter.get('/issue/detail/:id', authorizer(), getIssueById);
issuesRouter.get('/issue/detail/code/:code', getIssueByCode);
issuesRouter.put('/issue/update/:id', authorizer(), updateIssue);
issuesRouter.get('/issue/g-sec/in-demand', getAllGsecInDemandIssues);// for g-sec t-bil sdl
issuesRouter.post('/issue/issuesbycodes', getIssuesByCodes);// for g-sec t-bil sdl

issuesRouter.get('/issue/upcoming-issues/:type', getAllIssuesUpcoming);
export default issuesRouter;
