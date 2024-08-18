import Issues from '../../../database/models/issues/index.js';
import async from 'async';
import multer from 'multer';
import { fileStorage, fileFilter } from '../../helpers/multer.config.js';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();



var upload = multer({
	storage: fileStorage,
	fileFilter: fileFilter
}).fields([
	{
		name: 'report_file',
		maxCount: 1
	},
	{
		name: 'apply_file',
		maxCount: 1
	},
	{
		name: 'logo',
		maxCount: 1
	},
	{
		name: 'consideration_image',
		maxCount: 1
	},
	{
		name: 'bannerfile',
		maxCount: 1
	}
]);

export function createNewIssue(req, res) {
	upload(req, res, function(err) {
		if (err instanceof multer.MulterError) {
			console.log('Checking error from isntance of multer');
			console.log(err);
			return res.status(500).json(err);
		} else if (err) {
			console.log('Checking error');
			console.log(err);
			return res.status(500).json(err);
		}

		let contentBody = JSON.parse(req.body.body);

		Issues.findOne({ co_code: contentBody.co_code })
			.then((issue) => {
				if (issue !== null) {
					try {
						if (req.files.logo !== undefined) {
							fs.unlinkSync(path.join(__dirname, 'public', `/logo/${req.files.logo[0].filename}`));
						}
						if (req.files.report_file !== undefined) {
							fs.unlinkSync(
								path.join(__dirname, 'public', `/files/${req.files.apply_file[0].filename}`)
							);
						}
						if (req.files.apply_file !== undefined) {
							fs.unlinkSync(
								path.join(__dirname, 'public', `/pdfs/${req.files.apply_file[0].filename}`)
							);
						}
						if (req.files.consideration_image !== undefined) {
							fs.unlinkSync(
								path.join(__dirname, 'public', `/images/${req.files.consideration_image[0].filename}`)
							);
						}
						if (req.files.bannerfile !== undefined) {
							fs.unlinkSync(
								path.join(__dirname, 'public', `/images/${req.files.bannerfile[0].filename}`)
							);
						}
					} catch (err) {
						console.log('Error while deleting issues files', err);
					}

					return res.send({
						statusCode: 400,
						message: 'Issue with CMOTS code already exists'
					});
				}

				try {
					if (req.files.logo !== undefined) {
						contentBody.logo = `/logo/${req.files.logo[0].filename}`;
					}
					if (req.files.report_file !== undefined) {
						contentBody.report_file = `/files/${req.files.report_file[0].filename}`;
					}
					if (req.files.apply_file !== undefined) {
						contentBody.apply_file = `/pdfs/${req.files.apply_file[0].filename}`;
					}
					if (req.files.consideration_image !== undefined) {
						contentBody.consideration_image = `/images/${req.files.consideration_image[0].filename}`;
					}
					if (req.files.bannerfile !== undefined) {
						contentBody.bannerfile = `/images/${req.files.bannerfile[0].filename}`;
					}
				} catch (err) {
					console.log(err);
				}

				Issues.create(contentBody)
					.then((result) => {
						return res.send({
							statusCode: 200,
							message: 'Created Successfully',
							result
						});
					})
					.catch((err) => {
						// if error, delete the stored files
						try {
							if (req.files.logo !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', `/logo/${req.files.logo[0].filename}`));
							}
							if (req.files.report_file !== undefined) {
								fs.unlinkSync(
									path.join(__dirname, 'public', `/files/${req.files.report_file[0].filename}`)
								);
							}
							if (req.files.apply_file !== undefined) {
								fs.unlinkSync(
									path.join(__dirname, 'public', `/pdfs/${req.files.apply_file[0].filename}`)
								);
							}
							if (req.files.consideration_image !== undefined) {
								fs.unlinkSync(
									path.join(
										__dirname,
										'public',
										`/images/${req.files.consideration_image[0].filename}`
									)
								);
							}
							if (req.files.bannerfile !== undefined) {
								fs.unlinkSync(
									path.join(
										__dirname,
										'public',
										`/images/${req.files.bannerfile[0].filename}`
									)
								);
							}
						} catch (err) {
							console.log(err);
						}
						return res.send({
							statusCode: 500,
							message: err.message
						});
					});
			})
			.catch((err) => {
				// if error, delete the stored files
				try {
					if (req.files.logo !== undefined) {
						fs.unlinkSync(path.join(__dirname, 'public', `/logo/${req.files.logo[0].filename}`));
					}
					if (req.files.report_file !== undefined) {
						fs.unlinkSync(path.join(__dirname, 'public', `/files/${req.files.report_file[0].filename}`));
					}
					if (req.files.consideration_image !== undefined) {
						fs.unlinkSync(
							path.join(__dirname, 'public', `/images/${req.files.consideration_image[0].filename}`)
						);
					}
					if (req.files.bannerfile !== undefined) {
						fs.unlinkSync(
							path.join(__dirname, 'public', `/images/${req.files.bannerfile[0].filename}`)
						);
					}
				} catch (err) {
					console.log(err);
				}

				return res.send({
					statusCode: 500,
					message: err.message
				});
			});
	});
}

export function updateIssue(req, res) {
	Issues.findById(req.params.id).then((issue) => {
		if (issue === null) {
			return res.send({
				statusCode: 404,
				message: 'Issue not found'
			});
		} else {
			upload(req, res, function(err) {
				if (err instanceof multer.MulterError) {
					console.log('Checking error from isntance of multer');
					console.log(err);
					return res.status(500).json(err);
				} else if (err) {
					console.log('Checking error');
					console.log(err);
					return res.status(500).json(err);
				}

				let contentBody = JSON.parse(req.body.body);
				

				try {
					if (req.files.logo !== undefined) {
						contentBody.logo = `/logo/${req.files.logo[0].filename}`;
					}
					if (req.files.report_file !== undefined) {
						contentBody.report_file = `/files/${req.files.report_file[0].filename}`;
					}
					if (req.files.apply_file !== undefined) {
						contentBody.apply_file = `/pdfs/${req.files.apply_file[0].filename}`;
					}
					if (req.files.consideration_image !== undefined) {
						contentBody.consideration_image = `/images/${req.files.consideration_image[0].filename}`;
					}
					if (req.files.bannerfile !== undefined) {
						contentBody.bannerfile = `/images/${req.files.bannerfile[0].filename}`;
					}


					//console.log('dnvr',contentBody.deleteReport)
					// Remove files start
					if(contentBody.deleteReport === 1)
					{
						
						contentBody.report_file = null
					}
					if(contentBody.deleteApplifrom === 1)
					{
						contentBody.apply_file = null
					}
					if(contentBody.deleteOtimage === 1)
					{
						contentBody.consideration_image = ''
					}
					if(contentBody.deleteBanner === 1)
					{
						contentBody.bannerfile = ''
					}
					// Remove files end


				} catch (err) {
					console.log(err);
				}
				console.log('xpnnn',contentBody);
				Issues.findByIdAndUpdate({ _id: req.params.id }, contentBody, { new: true })
					.then((result) => {
						try {
							if (req.files.logo !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', issue.logo));
							}
							if (req.files.report_file !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', issue.report_file));
							}
							if (req.files.apply_file !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', issue.apply_file));
							}
							if (req.files.consideration_image !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', issue.consideration_image));
							}
							if (req.files.bannerfile !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', issue.bannerfile));
							}
						} catch (err) {
							console.log(err);
						}

						return res.send({
							statusCode: 200,
							result: result
						});
					})
					.catch((error) => {
						// if error, delete the stored files
						try {
							if (req.files.logo !== undefined) {
								fs.unlinkSync(path.join(__dirname, 'public', `/logo/${req.files.logo[0].filename}`));
							}
							if (req.files.report_file !== undefined) {
								fs.unlinkSync(
									path.join(__dirname, 'public', `/files/${req.files.report_file[0].filename}`)
								);
							}
							if (req.files.apply_file !== undefined) {
								fs.unlinkSync(
									path.join(__dirname, 'public', `/pdfs/${req.files.apply_file[0].filename}`)
								);
							}
							if (req.files.consideration_image !== undefined) {
								fs.unlinkSync(
									path.join(
										__dirname,
										'public',
										`/images/${req.files.consideration_image[0].filename}`
									)
								);
							}
							if (req.files.bannerfile !== undefined) {
								fs.unlinkSync(
									path.join(
										__dirname,
										'public',
										`/images/${req.files.bannerfile[0].filename}`
									)
								);
							}
						} catch (err) {
							console.log(err);
						}

						return res.send({
							statusCode: 500,
							message: error.message
						});
					});
			});
		}
	});
}

export function getAllIssues(req, res) {
	Issues.find()
		.then((result) => {
			return res.send({
				statusCode: 200,
				result: result
			});
		})
		.catch((error) => {
			return res.send({
				statusCode: 500,
				error: error.message
			});
		});
}


export function getAllIssuesUpcoming(req, res) {
	var type = req.params.type

	Issues.find({ upcoming_issue: 1 , issue_type:type })
		.then((result) => {
			return res.send({
				statusCode: 200,
				result: result
			});
		})
		.catch((error) => {
			return res.send({
				statusCode: 500,
				error: error.message
			});
		});
}

export function getAllInDemandIssues(req, res) {
	let sts = 404;

	// Issues.find({ in_demand: true , expiry_date: {
	// 							$gte: new Date(new Date().setHours('00', '00', '00', '00'))
	// 						} })

	Issues.find({ in_demand: true , expiry_date: {
								$gte: new Date()
							} })
		.then((result) => {

			if(result.length > 0)
			{
				sts = 200;
			}
			return res.send({
				statusCode: sts,
				result: result
			});
		})
		.catch((error) => {
			return res.send({
				statusCode: 500,
				error: error.message
			});
		});
}

export function getPaginatedIssues(req, res) {
	if (!req.query.numOfItems || !req.query.pageNum) {
		return res.send({
			statusCode: 500,
			message: 'please provide numOfItems and pageNum'
		});
	}

	// uanable to fetch documentscount and pagianated data at the ssame time
	// therfore, used async

	async.parallel(
		{
			documentCounts: function(callback) {
				Issues.find().countDocuments().exec(callback);
			},
			paginatedData: function(callback) {
				Issues.aggregate([
					//{
					//	$match: {
					//		expiry_date: {
					//			$gte: new Date(new Date().setHours('00', '00', '00', '00'))
					//		}
					//	}
					//},
					{
						$skip: req.query.numOfItems * (req.query.pageNum - 1)
					},
					{
						$limit: parseInt(req.query.numOfItems)
					}
				]).exec(callback);
			}
		},
		function(error, result) {
			if (error) {
				console.log(error);
				return res.send(error);
			}

			console.log(result);
			return res.send({
				statusCode: 200,
				documentCounts: result.documentCounts,
				paginatedData: result.paginatedData
			});
		}
	);
}

export function deleteIssue(req, res) {
	Issues.findByIdAndDelete(req.params.id)
		.then((issue) => {
			if (issue === null) {
				console.log(issue);
				return res.send({
					statusCode: 401,
					message: 'Issue Not Found'
				});
			}

			try {
				if (issue.logo !== null) {
					fs.unlinkSync(path.join(__dirname, 'public', issue.logo));
					console.log('deleted', path.join(__dirname, 'public', issue.logo));
				}
				if (issue.report_file !== null) {
					fs.unlinkSync(path.join(__dirname, 'public', issue.report_file));
				}
				if (issue.consideration_image !== null) {
					fs.unlinkSync(path.join(__dirname, 'public', issue.consideration_image));
				}
			} catch (err) {
				console.log('Error while deleting issues files', err);
			}

			return res.send({
				statusCode: 200,
				result: issue
			});
		})
		.catch((error) => {
			console.log(error);
			return res.send({
				statusCode: 500,
				message: 'Error while deleting Issue',
				error: error.message
			});
		});
}

export function getIssueById(req, res) {
	Issues.findById(req.params.id)
		.then((result) => {
			if (result === null) {
				return res.send({
					statusCode: 401,
					result: 'Issue not found'
				});
			}

			return res.send({
				statusCode: 200,
				result: result
			});
		})
		.catch((error) => {
			console.log(error);
			return res.send({
				statusCode: 500,
				error: error.message
			});
		});
}

export function getIssueByCode(req, res) {
	let code = req.params.code;
	if (!code) {
		return res.send({
			statusCode: 400,
			message: 'Issue/CMOTS Code is required'
		});
	}

	Issues.findOne({ $or: [ { co_code: code }, { issuecode: code } ] })
		.then((result) => {
			if (result === null) {
				return res.send({
					statusCode: 401,
					result: []
				});
			}

			return res.send({
				statusCode: 200,
				result: result
			});
		})
		.catch((error) => {
			console.log(error);
			return res.send({
				statusCode: 500,
				error: error.message
			});
		});
}
