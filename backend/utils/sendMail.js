import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "adrianwee45@gmail.com",
    pass: "Kim!!!11",
  },
})

const sendMail = async () => {
  let result = await transporter.sendMail({
    from: 'adrianwee45@gmail.com',
    to: 'adrianwee45@gmail.com',
    subject: 'Message from Fruityvice.com',
    text: 'New fruits are added',
  })

  console.log("mail result : ", result)
}

export default sendMail;