// import nodemailer from 'nodemailer';

// export default async function ContactAPI (req, res) {
//     const { name, email, message } = req.body;

//     
    
// const emailid =  process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.email",
//         port: 465,
//         secure: true,
//         auth: {
//             user: emailid,
//             pass: pass,
//         },
//     });
//     try{
//         const mail= await transporter.sendMail({
//             from: emailid,  
//             to: emailid,
//             subject: `New Message from ${name}`,
//             html: `<div>
//                 <h1>${name}</h1>
//                 <p>${message}</p>
//             </div>`,
//         })
//             res.status(200).json({ 
//                 message:"Message sent successfully",
//             });
//             console.log("Message sent: %s", info.messageId);
            
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({ 
//             message:"Could not send the message",
//          });
//     }
// }