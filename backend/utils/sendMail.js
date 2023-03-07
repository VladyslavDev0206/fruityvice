import nodemailer from "nodemailer"

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: testEmailAccount.user,
    pass: testEmailAccount.pass,
  },
})


const sendMail = async (newFruitsString) => {
  let result = await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: 'adrianwee45@gmail.com, adrianwee45@gmail.com',
    subject: 'Message from Fruityvice.com',
    text: 'New fruits are added : ' + newFruitsString,
    html:
      'This <i>message</i> was sent from <strong>Fruityvice.com</strong> server.',
  })

  console.log("mail result : ", result)
}

export default sendMail;