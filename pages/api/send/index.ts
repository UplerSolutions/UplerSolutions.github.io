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
    const { body }: { body: ReqBody } = req
    try {
        const { data, error } = await resend.emails.send({
            from: 'Upler <onboarding@resend.dev>',
            to: body.to,
            subject: body.subject,
            react: EmailTemplate({ firstName: 'John' }),
            text: body.text, // Añade el texto del email aquí
        });

        console.log(body.to);

        if (error) {
            res.status(400).json({ error });
            console.log(error);

        }

        res.status(200).json({ data });
        console.log(data);

    } catch (error) {
        res.status(400).json({ error });
    }
}