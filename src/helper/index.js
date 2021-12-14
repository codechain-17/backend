import nodemailer from 'nodemailer';
import config from '../config/index.js'
import ejs from 'ejs';

function createSendMail(mailconfig) {
    const transporter = nodemailer.createTransport(mailconfig);
    return async function sendMail({ html, to, subject }) {
        const mailOption = {
            from: config.from_mail,
            to: to,
            bcc: config.admin_email,
            subject: `${config.subject_mail} ${subject} `,
            html
        }
        return await transporter.sendMail(mailOption);
    }
}

function createSendMailGmail() {
    return createSendMail(
        {
            service: config.gmail_service,
            auth: {
                type: 'OAuth2',
                user: config.gmail_user,
                clientId: config.gmail_client_id,
            }
        });
}


export const sendMail = async (user, items = null, subject) => {
    try {
        const __dirname = process.cwd();
        const html = await ejs.renderFile(`${__dirname}/src/views/email.ejs`, { user, subject });

        const sendGenericMail = createSendMailGmail();
        const info = await sendGenericMail({ html, to: user.email, username: user.name, subject });
        console.log(info);

    } catch (error) {
        console.error(error);
    }
}

