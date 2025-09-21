import { Resend } from 'resend';

// Log if API key is missing
if (!process.env.RESEND_API_KEY) {
    console.log("NO API KEY");
}

// Show a preview of loaded environment variables
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY?.slice(0, 6));
console.log('RESEND_DOMAIN:', process.env.RESEND_DOMAIN);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(
    { email, name, msg }: { email: string; name: string; msg: string }
) {
    try {
        const res = await resend.emails.send({
            from: 'onboarding@resend.dev',  //  Use sandbox sender
            to: "kaushik111103@gmail.com", 
            subject: 'New Notification from Portfolio',
            html: `
                <div style="font-family: Arial, sans-serif; color: #222;">
                    <h2>New message from ${name} (${email})</h2>
                    <p>${msg}</p>
                </div>
            `
        });

        // 🔍 Log the full response
        console.log("Resend response:", res);

        if (res.data) {
            return {
                success: true,
                message: "Email sent successfully",
            };
        } else {
            return {
                success: false,
                message: "Email error (no data returned)",
            };
        }

    } catch (emailError) {
        console.error("Error sending email:", emailError);
        return {
            success: false,
            message: "Failed to send email",
        };
    }
}
