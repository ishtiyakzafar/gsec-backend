import Admin from '../../../../database/models/admin/index.js'
import { generateToken } from '../../../helpers/tokenHandler/index.js'


export default function signIn(req, res){

    Admin.findOne({email: req.body.email}).then(user => {
        if(user === null){
            return res.send({ 
                statusCode: 404,
                message : "User not found."
            }); 
        }else{
            if(user.verifyPassword(req.body.password)){
                
                let token = generateToken({
                    email: user.email,
                    role: user.role
                })
                return res.send({
                    statusCode: 200,
                    message: 'User Varified',
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        token: token
                    }
                })
            }else{
                return res.send({ 
                    statusCode: 404,
                    message : "Wrong Password"
                }); 
            }
        }
    }).catch(err => {
        return res.send({
            statusCode: 400,
            error: err
        })
    })

}