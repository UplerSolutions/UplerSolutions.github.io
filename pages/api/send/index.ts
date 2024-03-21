import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/ui/email-template/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
interface ReqBody {
    to: string
    subject: string
    extra: string
    text: string
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse,) => {
    console.log(res, "res");
    
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "quesada.serafin03@gmail.com",
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
            text: 'Hello world', // Añade el texto del email aquí
        });


        if (error) {
            res.status(400).json({ error });
            console.log(error);

        }

        res.status(200).json({ data });

    } catch (error) {
        res.status(400).json({ error });
    }
}