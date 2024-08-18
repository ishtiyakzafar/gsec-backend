import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import expressValidator from 'express-validator'
import adminRouter from './routes/admin/index.js'
import issuesRouter from './routes/issues/index.js'
import BannerRouter from './routes/banners/index.js'
import RazorpayRouter from './routes/razorpay/index.js'
import GsecRouter from './routes/gsec/index.js'
import Issues from '../database/models/issues/index.js';
import { Console } from 'console'
import { PDFDocument, degrees, rgb, StandardFonts } from 'pdf-lib'
import fs from "fs"
import http from 'http'
import axios from 'axios'
import { BlobServiceClient } from "@azure/storage-blob";
import fetch from 'node-fetch';


const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(process.env.CONTAINER_NAME);

const __dirname = path.resolve()
dotenv.config({
  path: path.resolve(__dirname, '.env')
})
const pdfStumpModel = mongoose.model('clientpdfs', { pan_id: String, issue_code: String, file: String, application_no: String });

const app = express()
app.use(express.static("public"))
app.use("logo", express.static("logo"))
app.use("files", express.static("files"))
app.use("images", express.static("images"))
app.use("afterstumppdfs", express.static("afterstumppdfs"))
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: false
}));
app.use(bodyParser.json({limit: "50mb"}));

app.use(bodyParser.json())
app.use(cors())
app.use(expressValidator())

app.use(adminRouter)
app.use(issuesRouter)
app.use(BannerRouter)
app.use(RazorpayRouter)
app.use(GsecRouter)

const port = process.env.PORT | 3005

app.post('/modify-pdf', async (req, res) => {

  //console.log('akkpaaa=>',req.protocol+'://'+req.headers.host)

  let sampleRes1 = req.body.sampleRes1;
  let sampleResponse2 = req.body.sampleResponse2;
  let milliseconds = new Date().getTime();
  let base_url = req.protocol+'://'+req.headers.host;
  let issueCode = sampleRes1.issuecode;
  //let issueCode = 'AGSTRA';
  // let panId = sampleResponse2.resultData.panNo;
  let panId = req.body.sampleRes1.applicationNo;
  let timestamp = (milliseconds.toString()).substring(9, 13);
  let flnm = '';
  let filePath ='';
  let issuedata = await Issues.findOne({issuecode:issueCode})
  if(issuedata)
  {
    try{

      const url = issuedata.apply_file
      filePath = await fetch(url).then(res => res.arrayBuffer())
    }
    catch(e)
    {
      res.send({ status: 0, message: 'No proper application file is found', data: {} });
      return false;
    } 
  }


  //console.log('issue',filePath);
  // console.log('res',sampleRes1.coOrdinates);
  //console.log('res',issuedata);
  //return false;

  // If modify then remove previous PDFDocument
  if(req.body.sampleRes1.ismodify && req.body.sampleRes1.ismodify === 1)
  {
    pdfStumpModel.deleteOne({ pan_id: panId, issue_code: issueCode }, async (err, docs) => {
        if (err) {
          res.send({ status: 0, message: 'Somthing Went Wrong!', data: err });
          return false
        } 
      });
    
    // return false
  }

  // End modify delete code

setTimeout(function(){
  //console.log('kkk=>',issuedata)
  if(issuedata === null || issuedata?.apply_file === null)
  {
      pdfStumpModel.findOne({ pan_id: panId, issue_code: issueCode }, async (err, docs) => {
        if (err) {
          res.send({ status: 0, message: 'Somthing Went Wrong!1', data: {} });
        } else {
          if (docs != null) {
            res.send({ status: 1, message: 'Pdf Already Exists!!', data: { pan_id: docs.pan_id, file: base_url+'/afterstumppdfs/' + docs.file } });
          } 
          else
          {
            res.send({ status: 0, message: 'Application file not found', data: {} }); 
          }
        }
      });     
     return false
  }

  // For normal
  // const filePath = './public'+ issuedata.apply_file;
  // For azure storage

  // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
  // const filePath = await fetch(url).then(res => res.arrayBuffer())
  //const filePath = issuedata.apply_file;

  //console.log('xxxx',panId+'    '+issueCode)
  //const filePath = './public/pdfs/EQUITAS.pdf';
  pdfStumpModel.findOne({ pan_id: panId, issue_code: issueCode }, async (err, docs) => {
    if (err) {
      res.send({ status: 0, message: 'Somthing Went Wrong!2', data: {} });
    } else {
      if (docs != null) {
        // res.send({ status: 1, message: 'Pdf Already Exists!!', data: { pan_id: docs.pan_id, file: base_url+'/afterstumppdfs/' + docs.file } });
        // for azure blob
        res.send({ status: 1, message: 'Pdf Already Exists!!', data: { pan_id: docs.pan_id, file: docs.file } });
      } else {
        try {
          // for noemal
          // if (fs.existsSync(filePath)) {
          // For Azure
          if (filePath) {
            // for noemal
            //const content = await PDFDocument.load(fs.readFileSync(filePath));
            // For Azure
            const content = await PDFDocument.load(filePath);
            const helveticaFont = await content.embedFont(StandardFonts.Helvetica);
            const helveticaFontBold = await content.embedFont(
              StandardFonts.HelveticaBold
            );
            const pages = await content.getPages();
            let cords = sampleRes1.coOrdinates;
            //let fields = sampleResponse2.resultData;
            if (!cords.length) {
              res.send({ status: 0, message: 'Co-Ordinates can not be blank!', data: {} });
            } else {
              for (const [i, page] of Object.entries(pages)) {
                cords.forEach(doc => {
                  // let key = doc.fieldName.replace(/ /g, "_");
                  // key = capitalize(key);
                  // let text = "";
                  // if (fields[key] != undefined) {
                  //   text = fields[key];
                  // } else {
                  //   text = text;
                  // }
                  var prvalue = ''
                  if(doc.fieldName === "AmountBlocked" || doc.fieldName === "AccountNumbe" || doc.fieldName === "MobileNumber" || doc.fieldName === "DPID" || doc.fieldName === "DPID1" || doc.fieldName === "BeneficiaryID" || doc.fieldName === "BeneficiaryID1" || doc.fieldName === "PanNo" || doc.fieldName === "PanNo1"){
                    prvalue = doc.value.split('').join('    ')
                  }
                  else
                  {
                    prvalue = doc.value
                  }

                  if (
                    doc.fieldName === "Pan1" ||
                    doc.fieldName === "Pan2" ||
                    doc.fieldName === "Pan3" ||
                    doc.fieldName === "Pan4" ||
                    doc.fieldName === "accno1" ||
                    doc.fieldName === "Dp1" ||
                    doc.fieldName === "Dp2"
                  ) {
                    const characterSpacing = 2; // Adjust the spacing value as per your requirement

                    let xOffset = doc.xcord;
                    for (const char of prvalue) {
                      page.drawText(char, {
                        x: xOffset,
                        y: doc.ycord,
                        size: 7,
                        color: rgb(0, 0, 0),
                        font: helveticaFontBold,
                      });

                      xOffset +=
                        helveticaFont.widthOfTextAtSize(char, 7) +
                        characterSpacing;
                    }
                  } else {
                    page.drawText(prvalue, {
                      x: doc.xcord,
                      y: doc.ycord,
                      // y: page.getHeight() - parseInt(doc.ycord),
                      size: 7,
                      spacing: 2,
                      color: rgb(0, 0, 0),
                      font: helveticaFont,
                      // rotate: degrees(-45),
                    });
                  }
                });
              }
              let fileName = issueCode + timestamp + panId + '.pdf';

              // For azure blob storage pdf
              const data = Buffer.from(await content.save(), "base64");
              const blockBlobClient = containerClient.getBlockBlobClient(fileName);
              await blockBlobClient.uploadData(data, {
                blobHTTPHeaders: { blobContentType: 'application/pdf' },
              });
              var finalPdfUrl = `${process.env.BLOB_URL}/${fileName}`;

              // End blob storage pdf


                // For Normal storage pdf
              //fs.writeFileSync('./public/afterstumppdfs/' + fileName, await content.save());


              const newPdf = new pdfStumpModel({ pan_id: panId, issue_code: issueCode, file: finalPdfUrl });
              newPdf.save((err) => {
                if (err) {
                  res.send({ status: 0, message: 'Somthing Went Wrong!3', data: {} });
                } else {

                // For Normal storage pdf
                  //res.send({ status: 1, message: 'Pdf modified successfully!!', data: { pan_id: panId, file: base_url+'/afterstumppdfs/' + fileName } });

                // For azure blob storage pdf
                  res.send({ status: 1, message: 'Pdf modified successfully!!', data: { pan_id: panId, file: finalPdfUrl } });
                  
                }
              })

            }
          } else {
            res.send({ status: 0, message: 'File Does Not Exists With The Request Issue Code!', data: {} });
          }
        } catch (err) {
          console.log(err);
          res.send({ status: 0, message: 'Somthing Went Wrong!4', data: {} });
        }
      }
    }
  });
}, 800);

});


app.get('/', (req, res) => {
  res.send("welcome azure UAT");
});

app.get('/testapi', (req, resp) => {

    console.log('abrakadabra');
    
    const options = {
          hostname: 'https://oneupcb.indiainfoline.com/issue',
          path: '/in-demand',
          method: 'GET'
      };
          
      // Sending the request
      const data = http.request(options, (res) => {
          let data = ''
          
          res.on('data', (chunk) => {
              data += chunk;
              // process.stdout.write(data)
          });
          
          // Ending the response 
          res.on('end', () => {
              //console.log('Body:', JSON.parse(data))
             // resp.send("welcomexxx");
             return resp.send({
                statusCode: 200,
                result: data
              });
          });
            
      }).on("error", (err) => {
          console.log("Error: ", err)
      }).end()
      
     
});

app.post('/fetchapi', (req, resp) => {
  
  let  headers = req.body.headers
  let data = req.body.body


  axios
  .post(req.body.endpoint,data,{
    headers: headers
  })
  .then(res => {
    //console.log(`statusCode: ${res.status}`)
    //console.log(res.data)
    return resp.send(res.data);
  })
  .catch(error => {    
    return resp.send({
      statusCode: 500,
      result: error
    });
  }) 
});

app.post('/getfetchapi', (req, resp) => {
  
  let  headers = req.body.headers
  let data = req.body.data
  axios
  .get(req.body.endpoint,data,{
    headers: headers
  })
  .then(res => {
    //console.log(`statusCode: ${res.status}`)
    //console.log(res.data)
    return resp.send(res.data);
  })
  .catch(error => {    
    return resp.send({
      statusCode: 500,
      result: error
    });
  }) 
});



function capitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
app.listen(port, () => {
  console.log(`Server is up and running on port - ${port}`)
})