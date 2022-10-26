import NextAuth, { NextAuthOptions } from 'next-auth';
import { createTransport } from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';
import moment from 'moment';

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';

// Providers
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';

function html(params: { url: string; host: string; join: boolean }) {
  const { url, host, join } = params;

  const title = join ? 'Confirm your email address' : 'Trying to login?';
  const description = join
    ? 'Follow this link to authenticate.'
    : 'Follow this link to continue joining';

  return `<!DOCTYPE html>
  <html lang='en' xmlns:v='urn:schemas-microsoft-com:vml'>
  <head>
    <meta charset='utf-8'>
    <meta name='x-apple-disable-message-reformatting'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta name='format-detection' content='telephone=no, date=no, address=no, email=no'>
    <meta name='color-scheme' content='light dark'>
    <meta name='supported-color-schemes' content='light dark'>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
    </style>
    <![endif]-->  
    <style>
      .hover-text-decoration-underline:hover {
          text-decoration: underline;
      }
      @media (max-width: 600px) {
        .sm-mx-3 {
            margin-left: 12px !important;
            margin-right: 12px !important;
        }
        .sm-my-15px {
            margin-top: 15px !important;
            margin-bottom: 15px !important;
        }
        .sm-mt-5 {
            margin-top: 20px !important;
        }
        .sm-mt-2 {
            margin-top: 8px !important;
        }
        .sm-mt-30px {
            margin-top: 30px !important;
        }
        .sm-mt-3 {
            margin-top: 12px !important;
        }
        .sm-block {
            display: block !important;
        }
        .sm-hidden {
            display: none !important;
        }
        .sm-h-60px {
            height: 60px !important;
        }
        .sm-h-26px {
            height: 26px !important;
        }
        .sm-w-20 {
            width: 80px !important;
        }
        .sm-w-26px {
            width: 26px !important;
        }
        .sm-p-30px {
            padding: 30px !important;
        }
        .sm-p-3 {
            padding: 12px !important;
        }
        .sm-py-8 {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
        }
        .sm-px-6 {
            padding-left: 24px !important;
            padding-right: 24px !important;
        }
        .sm-text-22px {
            font-size: 22px !important;
        }
        .sm-text-xs {
            font-size: 12px !important;
        }
        .sm-text-10px {
            font-size: 10px !important;
        }
      }
    </style>
  </head>
  <body style='word-break: break-word; -webkit-font-smoothing: antialiased; margin: 0; width: 100%; padding: 0'>
    <div role='article' aria-roledescription='email' aria-label='' lang='en'>    
      <table style='width: 100%' cellpadding='0' cellspacing='0' role='presentation'>
        <tr>
          <td align='center' style='background-color: #ECEEF8'>
            <table width='100%' style='max-width: 600px' cellpadding='0' cellspacing='0' role='presentation'>
              <tr>
                <td class='sm-py-8 sm-px-6' style='padding: 40px; text-align: center'>
                  <a href='https://findlabs.org'>
                    <img src='https://iili.io/PhUM8P.png' width='96' height='40' alt='find logo'>
                  </a>
                </td>
              </tr>
              <tr>
                <td align='center' class='sm-px-6'>
                  <table style='margin-bottom: 24px; width: 100%; border-radius: 20px; background-color: #fff; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)' cellpadding='0' cellspacing='0' role='presentation'>
                    <tr>
                      <td class='sm-p-30px sm-px-6' style='border-radius: 4px; padding: 40px; text-align: center; font-size: 16px; line-height: 24px; color: #334155'>
                        <div style='text-align: center'>
                          <img src='https://iili.io/PhgKlV.png' class='sm-h-60px sm-w-20' alt='mail' style='height: 100px; width: 130px'>
                        </div>
                        <p class='sm-text-22px sm-mt-5' style='margin-bottom: 0; margin-top: 40px; text-align: center; font-size: 36px; font-weight: 600; color: #151515'>
                          ${title}
                        </p>
                        <p class='sm-text-xs sm-mt-2' style='margin-bottom: 0; margin-top: 16px; font-size: 20px; font-weight: 400; color: #47495D'>
                          ${description}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style='text-align: center'>
                        <div class='sm-mx-3' style='margin-left: 20px; margin-right: 20px; border-radius: 20px; border-width: 1px; border-style: solid; border-color: #E8E8EB'>
                          <p class='sm-p-3' style='margin-top: 0; margin-bottom: 0; padding-left: 20px; padding-right: 20px; padding-top: 28px; padding-bottom: 28px; text-align: center'>
                            <a href='${url}' class='sm-text-xs' style='padding-top: 2px; padding-bottom: 2px; font-size: 18px; font-weight: 500; color: #2876F8; text-decoration-line: none'>${url}
                            </a>
                          </p>
                        </div>
                        <p class='sm-mt-30px sm-text-xs' style='margin-top: 60px; text-align: center; font-weight: 600; color: #151515'>
                          Questions about setting up Find? Email us at
                          <a href='mailto:hello@findlabs.org' style='color: #2876F8; text-decoration-line: none'>hello@findlabs.org</a>
                        </p>
                        <p class='sm-mt-2 sm-text-xs' style='margin-left: auto; margin-right: auto; margin-top: 16px; max-width: 500px; color: #A3A4AE'>
                          If you didn’t request this email, there’s nothing to worry about — you can
                          safely ignore it.
                        </p>
                        <div class='sm-mt-30px sm-mx-3 sm-p-3' style='margin-left: 20px; margin-right: 20px; margin-top: 60px; border-radius: 20px; background-color: #2876F8; padding: 30px'>
                          <div style='display: flex; justify-content: space-between'>
                            <img src='https://iili.io/PhrCrl.png' class='sm-hidden' style='display: block; height: 40px; width: 160px' alt=''>
                            <img src='https://iili.io/PhsUqg.png' class='sm-block' style='display: none; height: 26px; width: 26px' alt=''>
                            <div style='margin-left: auto'>
                              <img src='https://iili.io/Phrw4R.png' class='sm-w-26px sm-h-26px' style='height: 40px; width: 40px' alt=''>
                              <img src='https://iili.io/Ph4d3Q.png' class='sm-w-26px sm-h-26px' style='height: 40px; width: 40px' alt=''>
                              <img src='https://iili.io/Ph4EF4.png' class='sm-w-26px sm-h-26px' style='height: 40px; width: 40px' alt=''>
                            </div>
                          </div>
                          <div class='sm-my-15px' style='margin-top: 30px; margin-bottom: 30px; border-width: 1px; border-bottom-width: 0; border-style: solid; border-color: #fff; opacity: 0.2'></div>
                          <div class='sm-text-10px' style='text-align: left; font-size: 14px; color: #fff'>
                            <p style='margin-bottom: 0'>
                              Find Labs Inc.<br>548 Market St #71364, San Francisco, CA 94104
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style='padding-left: 24px; padding-right: 24px; text-align: center; color: #A3A4AE'>
                        <p class='sm-mt-3 sm-text-10px' style='margin-top: 20px; cursor: default'>
                          <a href='https://maizzle.com/docs/' class='hover-text-decoration-underline' style='text-decoration: none; color: #A3A4AE'>Blog</a>
                          &nbsp;&#124;&nbsp;
                          <a href='https://github.com/maizzle' class='hover-text-decoration-underline' style='text-decoration: none; color: #A3A4AE'>Terms</a>
                          &nbsp;&#124;&nbsp;
                          <a href='https://twitter.com/maizzlejs' class='hover-text-decoration-underline' style='text-decoration: none; color: #A3A4AE'>Docs</a>
                          &nbsp;&#124;&nbsp;
                          <a href='https://twitter.com/maizzlejs' class='hover-text-decoration-underline' style='text-decoration: none; color: #A3A4AE'>Find Community</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>  
    </div>
  </body>
  </html>
  `;
}

function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`;
}

let providers = [];
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  );
}

if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  providers.push(
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  );
}

if (
  process.env.FIND_SES_AWS_REGION &&
  process.env.FIND_SES_AWS_ACCESS_KEY_ID &&
  process.env.FIND_SES_AWS_SECRET_ACCESS_KEY
) {
  const ses = new aws.SES({
    region: process.env.FIND_SES_AWS_REGION,
    credentials: {
      accessKeyId: process.env.FIND_SES_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.FIND_SES_AWS_SECRET_ACCESS_KEY
    }
  });

  const transport = createTransport({
    SES: { ses, aws }
  });

  providers.push(
    EmailProvider({
      async sendVerificationRequest(params) {
        const { identifier, url } = params;
        const user = await prisma.user.findFirst({ where: { email: identifier } });
        const { host } = new URL(url);
        const result = await transport.sendMail({
          to: identifier,
          from: `Find Labs ${process.env.EMAIL_FROM}`,
          subject: !user
            ? 'Verify your email'
            : `Login to your Find account (${moment().utc().format('DD MMM, hh:ss a')} UTC)`,
          text: text({ url, host }),
          html: html({ url, host, join: !user })
        });
        const failed = result.rejected?.concat(result.pending).filter(Boolean);
        if (failed && failed.length) {
          throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
        }
      }
    })
  );
}

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, token }) {
      if (token?.user) {
        session.user = {
          ...session.user,
          ...(token.user as object)
        };
      }
      return session;
    },
    jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const image = user.image // || profile?.avatar_url;
        token.user = {
          ...user,
          image
        };
      }
      return token;
    }
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers,
  pages: {
    verifyRequest: '/auth/verify',
    error: '/auth/error',
    signIn: '/login'
  }
};

export default NextAuth(authOptions);
