import Issues from '../../../database/models/issues/index.js';
import async from 'async';
import { BlobServiceClient } from "@azure/storage-blob";


const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(process.env.CONTAINER_NAME);


export async function createNewIssue(req, res) {

	const { logo, report_file, apply_file, consideration_image, bannerfile } = req.body;

	try {
		const issue = await Issues.findOne({ co_code: req.body.co_code });
		if (issue) {
			return res.send({
				statusCode: 400,
				message: 'Issue with CMOTS code already exists'
			});
		} else {
			if (logo?.file) {
				const data = Buffer.from(logo.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(logo.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: logo.type },
				});
				req.body.logo = `${process.env.BLOB_URL}/${logo?.name}`;
			};
			if (report_file?.file) {
				const data = Buffer.from(report_file.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(report_file.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: report_file.type },
				});
				req.body.report_file = `${process.env.BLOB_URL}/${report_file?.name}`;
			};
			if (apply_file?.file) {
				const data = Buffer.from(apply_file.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(apply_file.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: apply_file.type },
				});
				req.body.apply_file = `${process.env.BLOB_URL}/${apply_file?.name}`;
			};
			if (consideration_image?.file) {
				const data = Buffer.from(consideration_image.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(consideration_image.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: consideration_image.type },
				});
				req.body.consideration_image = `${process.env.BLOB_URL}/${consideration_image?.name}`;
			};
			if (bannerfile?.file) {
				const data = Buffer.from(bannerfile.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(bannerfile.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: bannerfile.type },
				});
				req.body.bannerfile = `${process.env.BLOB_URL}/${bannerfile?.name}`;
			};

			const result = await Issues.create(req.body);
			return res.send({
				statusCode: 200,
				message: 'Created Successfully',
				result,
			});
		};
	} catch (error) {
		return res.status(500).json({ message: error.message });
	};
};

export async function updateIssue(req, res) {

	const { logo, report_file, apply_file, consideration_image, bannerfile } = req.body;

	try {
		const issue = await Issues.findById(req.params.id);
		if (!issue) {
			return res.send({
				statusCode: 404,
				message: 'Issue not found'
			});
		} else {
			if (logo?.file) {
				const data = Buffer.from(logo.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(logo.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: logo.type },
				});
				req.body.logo = `${process.env.BLOB_URL}/${logo?.name}`;
			};
			if (report_file?.file) {
				const data = Buffer.from(report_file.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(report_file.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: report_file.type },
				});
				req.body.report_file = `${process.env.BLOB_URL}/${report_file?.name}`;
			};
			if (apply_file?.file) {
				const data = Buffer.from(apply_file.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(apply_file.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: apply_file.type },
				});
				req.body.apply_file = `${process.env.BLOB_URL}/${apply_file?.name}`;
			};
			if (consideration_image?.file) {
				const data = Buffer.from(consideration_image.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(consideration_image.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: consideration_image.type },
				});
				req.body.consideration_image = `${process.env.BLOB_URL}/${consideration_image?.name}`;
			};
			if (bannerfile?.file) {
				const data = Buffer.from(bannerfile.file, "base64");
				const blockBlobClient = containerClient.getBlockBlobClient(bannerfile.name);
				await blockBlobClient.uploadData(data, {
					blobHTTPHeaders: { blobContentType: bannerfile.type },
				});
				req.body.bannerfile = `${process.env.BLOB_URL}/${bannerfile?.name}`;
			};

			const result = await Issues.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
			return res.send({
				statusCode: 200,
				message: 'Updated Successfully',
				result,
			});
		};
	} catch (error) {
		return res.status(500).json({ message: error.message });
	};
};

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
};


export function getAllIssuesUpcoming(req, res) {
	var type = req.params.type

	Issues.find({ upcoming_issue: 1, issue_type: type })
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
};

export function getAllInDemandIssues(req, res) {
	let sts = 404;

	// Issues.find({ in_demand: true , expiry_date: {
	// 							$gte: new Date(new Date().setHours('00', '00', '00', '00'))
	// 						} })

	Issues.find({
		in_demand: true, expiry_date: {
			$gte: new Date()
		}
	})
		.then((result) => {

			if (result.length > 0) {
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
};

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
			documentCounts: function (callback) {
				Issues.find().countDocuments().exec(callback);
			},
			paginatedData: function (callback) {
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
		function (error, result) {
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
};


export function deleteIssue(req, res) {
	Issues.findByIdAndDelete(req.params.id)
		.then((issue) => {
			if (issue === null) {
				return res.send({
					statusCode: 401,
					message: 'Issue Not Found'
				});
			}

			return res.send({
				statusCode: 200,
				result: issue
			});
		})
		.catch((error) => {
			return res.send({
				statusCode: 500,
				message: 'Error while deleting Issue',
				error: error.message
			});
		});
};

export function getIssueById(req, res) {
	Issues.findById(req.params.id)
		.then((result) => {
			if (result === null) {
				return res.send({
					statusCode: 401,
					result: 'Issue not found'
				});
			};



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
};

export function getIssueByCode(req, res) {
	let code = req.params.code;
	if (!code) {
		return res.send({
			statusCode: 400,
			message: 'Issue/CMOTS Code is required'
		});
	}

	Issues.findOne({ $or: [{ co_code: code }, { issuecode: code }] })
		.then((result) => {
			if (result === null) {
				return res.send({
					statusCode: 401,
					result: []
				});
			};

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
};
