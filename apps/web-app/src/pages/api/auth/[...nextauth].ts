import NextAuth, { type NextAuthOptions } from 'next-auth';
import { createTransport } from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/db/client';

// Providers
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';

function html(params: { url: string; host: string; join: boolean }) {
  const { url, host, join } = params;

  const escapedHost = host.replace(/\./g, '&#8203;.');
  const title = join ? '${title}' : 'Trying to login?';
  const description = join
    ? 'Follow this link to authenticate.'
    : 'Follow this link to continue joining';

  return `
  <!DOCTYPE html>
  <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
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
    <![endif]-->    <title>${title}</title>    <style>
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
      .sm-h-30px {
          height: 30px !important;
      }
      .sm-w-full {
          width: 100% !important;
      }
      .sm-w-20 {
          width: 80px !important;
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
  </style></head>
  <body style="word-break: break-word; -webkit-font-smoothing: antialiased; margin: 0; width: 100%; padding: 0">
    <div role="article" aria-roledescription="email" aria-label="${title}" lang="en">    <table style="width: 100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center" style="background-color: #ECEEF8">
            <table class="sm-w-full" style="width: 600px" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td class="sm-py-8 sm-px-6" style="padding: 40px; text-align: center">
                  <a href="https://findlabs.org">
                    <svg class="sm-h-30px" viewBox="0 0 96 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 40px; width: 96px">
                      <path d="M34.6862 34.1421C38.3055 30.5228 40.5441 25.5228 40.5441 19.9999C40.5441 16.6604 39.7256 13.5121 38.2783 10.7446C38.0748 10.3555 37.5536 10.2886 37.2446 10.6005L36.4034 11.4495C34.8517 13.0156 34.5197 15.3662 34.8898 17.5396C35.026 18.3394 35.0969 19.1614 35.0969 20C35.0969 24.0186 33.4681 27.6568 30.8345 30.2904C28.201 32.924 24.5627 34.5529 20.544 34.5529C18.2998 34.5529 16.1742 34.0449 14.276 33.1377C11.8085 31.9583 8.6859 31.8581 6.75211 33.7919C6.55873 33.9853 6.55831 34.2993 6.75639 34.4879C10.3443 37.9034 15.1994 39.9999 20.5441 39.9999C26.0669 39.9999 31.0669 37.7614 34.6862 34.1421Z" fill="url(#paint0_linear_93_2)"></path>
                      <path d="M20.544 5.4471C16.5253 5.4471 12.8871 7.07596 10.2536 9.70947C7.61996 12.343 5.99104 15.9813 5.99104 20C5.99104 21.4615 6.20647 22.8727 6.60732 24.2035C7.41182 26.8745 7.26208 29.9824 5.24969 31.9142C5.01144 32.1429 4.62726 32.1163 4.43138 31.8504C1.98799 28.5338 0.544098 24.4355 0.544098 20C0.544098 14.4771 2.78267 9.47715 6.40196 5.85786C10.0212 2.23858 15.0212 0 20.5441 0C25.0849 0 29.2723 1.51327 32.6294 4.063L28.7279 7.96454C26.396 6.37583 23.5784 5.4471 20.544 5.4471Z" fill="url(#paint1_linear_93_2)"></path>
                      <path d="M17.8205 20C17.8205 19.248 18.1253 18.5671 18.6181 18.0743L32.6294 4.06308C33.3555 4.6145 34.0427 5.21439 34.6862 5.85794C35.7929 6.96464 35.656 8.73953 34.5493 9.84623L22.4697 21.9258C21.9768 22.4186 21.296 22.7235 20.5439 22.7235C19.7919 22.7235 19.111 22.4186 18.6181 21.9258C18.1253 21.4329 17.8205 20.7521 17.8205 20Z" fill="url(#paint2_linear_93_2)"></path>
                      <path d="M12.6579 12.1143C10.6397 14.1325 9.39148 16.9206 9.39148 20.0002C9.39148 23.0798 10.6397 25.8679 12.6579 27.8861C14.6761 29.9042 17.4642 31.1525 20.5438 31.1525C23.6234 31.1525 26.4115 29.9042 28.4297 27.8861C30.4478 25.8679 31.6961 23.0798 31.6961 20.0002C31.6961 18.7672 31.496 17.581 31.1265 16.4722C30.9788 16.0288 30.4221 15.9183 30.088 16.2451L27.2515 19.0197C26.6104 19.6468 26.2964 20.5188 26.0789 21.3888C25.8244 22.4065 25.2967 23.3159 24.5781 24.0345C23.5456 25.0671 22.1192 25.7058 20.5435 25.7058C18.968 25.7058 17.5417 25.0673 16.5092 24.0348C15.4766 23.0023 14.838 21.5759 14.838 20.0003C14.838 18.4247 15.4767 16.9982 16.5093 15.9657C17.5418 14.9333 18.9681 14.2948 20.5435 14.2948C21.1065 14.2948 21.6505 14.3763 22.1643 14.5283L26.2665 10.4261C24.5934 9.42394 22.6359 8.84787 20.5438 8.84787C17.4642 8.84787 14.6761 10.0961 12.6579 12.1143Z" fill="url(#paint3_linear_93_2)"></path>
                      <path d="M61.6357 13.9646C62.8201 13.9646 63.6517 13.1078 63.6517 11.999C63.6517 10.9658 62.7949 10.1846 61.6357 10.1846C60.4765 10.1846 59.6197 11.0162 59.6197 12.0746C59.6197 13.133 60.4765 13.9646 61.6357 13.9646ZM50.7617 15.4262V16.1822H48.5441V18.803H50.7617V29.639H53.9117V18.803H60.1153V16.1822H53.8109V15.4766C53.8109 14.0402 54.4913 13.3094 55.8017 13.3094C56.4569 13.3094 57.0617 13.5362 57.5405 13.8638L58.4225 11.495C57.7169 10.991 56.6585 10.7642 55.5749 10.7642C52.4501 10.7642 50.7617 12.6038 50.7617 15.4262ZM60.0481 29.639H63.1981V16.1822H60.0481V29.639Z" fill="#151515"></path>
                      <path d="M73.4396 16.031C71.474 16.031 69.836 16.6862 68.8028 17.921V16.1822H65.804V29.639H68.954V22.835C68.954 20.1386 70.466 18.7778 72.7088 18.7778C74.7248 18.7778 75.9092 19.937 75.9092 22.331V29.639H79.0592V21.9278C79.0592 17.8706 76.6652 16.031 73.4396 16.031Z" fill="#151515"></path>
                      <path d="M92.0739 10.9406V17.8454C91.0155 16.6106 89.4782 16.031 87.7394 16.031C83.8334 16.031 80.9354 18.7274 80.9354 22.9106C80.9354 27.0938 83.8334 29.8154 87.7394 29.8154C89.579 29.8154 91.1414 29.1854 92.1999 27.9002V29.639H95.2239V10.9406H92.0739ZM88.1174 27.119C85.8494 27.119 84.1106 25.481 84.1106 22.9106C84.1106 20.3402 85.8494 18.7022 88.1174 18.7022C90.3854 18.7022 92.1243 20.3402 92.1243 22.9106C92.1243 25.481 90.3854 27.119 88.1174 27.119Z" fill="#151515"></path>
                      <defs>
                        <linearGradient id="paint0_linear_93_2" x1="38.2063" y1="10.4037" x2="6.60745" y2="35.83" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#2876F8" stop-opacity="0.15"></stop>
                          <stop offset="0.88952" stop-color="#00CDAE"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_93_2" x1="32.6294" y1="3.78237" x2="5.02804" y2="32.3413" gradientUnits="userSpaceOnUse">
                          <stop offset="0.151215" stop-color="#2876F8"></stop>
                          <stop offset="1" stop-color="#00CDAE" stop-opacity="0.15"></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear_93_2" x1="34.3845" y1="5.86891" x2="18.4139" y2="22.1906" gradientUnits="userSpaceOnUse">
                          <stop offset="0.133065" stop-color="#2876F8"></stop>
                          <stop offset="0.512706" stop-color="#2284ED"></stop>
                          <stop offset="1" stop-color="#13A5D1"></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear_93_2" x1="20.5438" y1="8.84787" x2="20.5438" y2="31.1525" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#2876F8"></stop>
                          <stop offset="1" stop-color="#00CDAE"></stop>
                          <stop offset="1" stop-color="#00CDAE"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center" class="sm-px-6">
                  <table style="margin-bottom: 24px; width: 100%; border-radius: 20px; background-color: #fff; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="sm-p-30px sm-px-6" style="border-radius: 4px; padding: 40px; text-align: center; font-size: 16px; line-height: 24px; color: #334155">
                        <div style="text-align: center">
                          <svg class="sm-w-20" viewBox="0 0 131 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 130px">
                            <path d="M18.4774 3.46437C18.4774 1.55105 20.0284 0 21.9418 0H127.321C129.235 0 130.786 1.55105 130.786 3.46437V14.0136V78.7791C130.786 80.6924 129.235 82.2435 127.321 82.2435H21.9418C20.0284 82.2435 18.4774 80.6924 18.4774 78.7791V14.0136V3.46437Z" fill="#2876F8"></path>
                            <g filter="url(#filter0_b_78_242)">
                              <path d="M0.982147 21.2209C0.982147 19.3076 2.5332 17.7565 4.44652 17.7565H109.826C111.74 17.7565 113.291 19.3076 113.291 21.2209V31.7701V96.5356C113.291 98.4489 111.74 100 109.826 100H4.44651C2.5332 100 0.982147 98.4489 0.982147 96.5356V31.7701V21.2209Z" fill="#CCDDF1" fill-opacity="0.5"></path>
                            </g>
                            <path d="M1.98215 96.5356V33.3924L55.1304 60.1233C56.3924 60.758 57.8803 60.758 59.1423 60.1233L112.291 33.3924V96.5356C112.291 97.8967 111.187 99 109.826 99H4.44651C3.08548 99 1.98215 97.8967 1.98215 96.5356ZM112.291 31.1537L58.2437 58.3366C57.547 58.6869 56.7257 58.6869 56.0291 58.3366L1.98215 31.1537V21.2209C1.98215 19.8599 3.08548 18.7565 4.44652 18.7565H109.826C111.187 18.7565 112.291 19.8599 112.291 21.2209V31.1537Z" stroke="#C3D7F2" stroke-opacity="0.5" stroke-width="2"></path>
                            <defs>
                              <filter id="filter0_b_78_242" x="-19.0179" y="-2.24347" width="152.308" height="122.243" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feGaussianBlur in="BackgroundImage" stdDeviation="10"></feGaussianBlur>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_78_242"></feComposite>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_78_242" result="shape"></feBlend>
                              </filter>
                            </defs>
                          </svg>
                        </div>
                        <p class="sm-text-22px sm-mt-5" style="margin-bottom: 0; margin-top: 40px; text-align: center; font-size: 36px; font-weight: 600; color: #151515">
                          ${title}
                        </p>
                        <p class="sm-text-xs sm-mt-2" style="margin-bottom: 0; margin-top: 16px; font-size: 20px; font-weight: 400; color: #47495D">
                          ${description}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center">
                        <div class="sm-mx-3" style="margin-left: 20px; margin-right: 20px; border-radius: 20px; border-width: 1px; border-style: solid; border-color: #E8E8EB">
                          <p class="sm-p-3" style="margin-top: 0; margin-bottom: 0; padding-left: 20px; padding-right: 20px; padding-top: 28px; padding-bottom: 28px; text-align: center">
                            <a href="${url}" class="sm-text-xs" style="padding-top: 2px; padding-bottom: 2px; font-size: 18px; font-weight: 500; color: #2876F8; text-decoration-line: none">${url}</a>
                          </p>
                        </div>
                        <p class="sm-mt-30px sm-text-xs" style="margin-top: 60px; text-align: center; font-weight: 600; color: #151515">
                          Questions about setting up Find? Email us at
                          <a href="mailto:hello@findlabs.org" style="color: #2876F8; text-decoration-line: none">hello@findlabs.org</a>
                        </p>
                        <p class="sm-mt-2 sm-text-xs" style="margin-left: auto; margin-right: auto; margin-top: 16px; max-width: 500px; color: #A3A4AE">
                          If you didn’t request this email, there’s nothing to worry about — you can
                          safely ignore it.
                        </p>
                        <div class="sm-mt-30px sm-mx-3 sm-p-3" style="margin-left: 20px; margin-right: 20px; margin-top: 60px; border-radius: 20px; background-color: #2876F8; padding: 30px">
                          <div style="display: flex; justify-content: space-between">
                            <svg width="159" height="40" viewBox="0 0 159 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M34.1421 34.1421C37.7614 30.5229 39.9999 25.5229 39.9999 20C39.9999 16.6605 39.1814 13.5122 37.7341 10.7447C37.5306 10.3555 37.0095 10.2887 36.7004 10.6006L35.8592 11.4496C34.3075 13.0157 33.9755 15.3663 34.3456 17.5397C34.4818 18.3395 34.5527 19.1615 34.5527 20.0001C34.5527 24.0187 32.9239 27.6569 30.2904 30.2905C27.6568 32.9241 24.0186 34.553 19.9998 34.553C17.7556 34.553 15.63 34.045 13.7318 33.1377C11.2644 31.9584 8.14177 31.8582 6.20798 33.792C6.01461 33.9854 6.01419 34.2994 6.21226 34.488C9.80015 37.9035 14.6552 40 20 40C25.5228 40 30.5228 37.7614 34.1421 34.1421Z" fill="url(#paint0_linear_78_229)"></path>
                              <path d="M19.9998 5.44709C15.9812 5.44709 12.343 7.07595 9.70946 9.70946C7.07586 12.343 5.44693 15.9813 5.44693 20C5.44693 21.4615 5.66237 22.8727 6.06321 24.2035C6.86771 26.8745 6.71797 29.9824 4.70559 31.9141C4.46733 32.1428 4.08316 32.1163 3.88727 31.8504C1.44389 28.5337 0 24.4355 0 20C0 14.4771 2.23857 9.47714 5.85786 5.85786C9.47714 2.23857 14.4771 0 20 0C24.5408 0 28.7282 1.51326 32.0853 4.063L28.1837 7.96453C25.8518 6.37582 23.0343 5.44709 19.9998 5.44709Z" fill="url(#paint1_linear_78_229)"></path>
                              <path d="M17.2763 20C17.2763 19.248 17.5812 18.5671 18.074 18.0743L32.0853 4.06311C32.8113 4.61453 33.4985 5.21442 34.1421 5.85797C35.2488 6.96467 35.1119 8.73956 34.0052 9.84626L21.9255 21.9258C21.4327 22.4187 20.7518 22.7235 19.9998 22.7235C19.2477 22.7235 18.5669 22.4187 18.074 21.9258C17.5812 21.433 17.2763 20.7521 17.2763 20Z" fill="white"></path>
                              <path d="M12.1138 12.1143C10.0956 14.1324 8.84735 16.9205 8.84735 20.0001C8.84735 23.0798 10.0956 25.8678 12.1138 27.886C14.132 29.9042 16.92 31.1524 19.9996 31.1524C23.0793 31.1524 25.8673 29.9042 27.8855 27.886C29.9037 25.8678 31.1519 23.0798 31.1519 20.0001C31.1519 18.7672 30.9519 17.5809 30.5824 16.4721C30.4347 16.0288 29.878 15.9183 29.5439 16.2451L26.7073 19.0197C26.0662 19.6468 25.7523 20.5187 25.5347 21.3888C25.2803 22.4064 24.7525 23.3159 24.034 24.0345C23.0015 25.0671 21.575 25.7058 19.9994 25.7058C18.4239 25.7058 16.9975 25.0672 15.965 24.0347C14.9325 23.0022 14.2939 21.5758 14.2939 20.0003C14.2939 18.4246 14.9326 16.9982 15.9652 15.9657C16.9977 14.9333 18.4239 14.2948 19.9994 14.2948C20.5624 14.2948 21.1064 14.3763 21.6201 14.5282L25.7223 10.4261C24.0493 9.42391 22.0917 8.84784 19.9996 8.84784C16.92 8.84784 14.132 10.0961 12.1138 12.1143Z" fill="white"></path>
                              <path d="M62.8771 14.7458V11.999H49.9999V29.639H53.2759V22.8854H61.7935V20.1134H53.2759V14.7458H62.8771Z" fill="white"></path>
                              <path d="M66.0764 13.9646C67.2608 13.9646 68.0924 13.1078 68.0924 11.999C68.0924 10.9658 67.2356 10.1846 66.0764 10.1846C64.9172 10.1846 64.0604 11.0162 64.0604 12.0746C64.0604 13.133 64.9172 13.9646 66.0764 13.9646ZM64.4888 29.639H67.6388V16.1822H64.4888V29.639Z" fill="white"></path>
                              <path d="M78.4007 16.031C76.4351 16.031 74.7971 16.6862 73.7639 17.921V16.1822H70.7651V29.639H73.9151V22.835C73.9151 20.1386 75.4271 18.7778 77.6699 18.7778C79.6859 18.7778 80.8703 19.937 80.8703 22.331V29.639H84.0203V21.9278C84.0203 17.8706 81.6263 16.031 78.4007 16.031Z" fill="white"></path>
                              <path d="M97.161 10.9406V17.8454C96.1026 16.6106 94.5654 16.031 92.8266 16.031C88.9206 16.031 86.0226 18.7274 86.0226 22.9106C86.0226 27.0938 88.9206 29.8154 92.8266 29.8154C94.6662 29.8154 96.2286 29.1854 97.287 27.9002V29.639H100.311V10.9406H97.161ZM93.2046 27.119C90.9366 27.119 89.1978 25.481 89.1978 22.9106C89.1978 20.3402 90.9366 18.7022 93.2046 18.7022C95.4726 18.7022 97.2114 20.3402 97.2114 22.9106C97.2114 25.481 95.4726 27.119 93.2046 27.119Z" fill="white"></path>
                              <path d="M103.726 29.639H116.225V26.867H107.002V11.999H103.726V29.639Z" fill="white"></path>
                              <path d="M122.765 16.031C120.598 16.031 118.506 16.5854 117.07 17.6942L118.305 19.9874C119.313 19.1558 120.875 18.6518 122.387 18.6518C124.63 18.6518 125.739 19.7354 125.739 21.575V21.7766H122.261C118.179 21.7766 116.667 23.5406 116.667 25.7834C116.667 28.127 118.607 29.8154 121.682 29.8154C123.698 29.8154 125.159 29.1602 125.915 28.001V29.639H128.889V21.7514C128.889 17.8706 126.646 16.031 122.765 16.031ZM122.337 27.5222C120.724 27.5222 119.766 26.7914 119.766 25.6574C119.766 24.6746 120.346 23.8682 122.488 23.8682H125.739V25.4306C125.21 26.8166 123.874 27.5222 122.337 27.5222Z" fill="white"></path>
                              <path d="M139.383 16.031C137.669 16.031 136.157 16.6106 135.073 17.8202V10.9406H131.923V29.639H134.922V27.9002C135.981 29.1854 137.543 29.8154 139.383 29.8154C143.314 29.8154 146.212 27.0938 146.212 22.9106C146.212 18.7274 143.314 16.031 139.383 16.031ZM139.03 27.119C136.762 27.119 135.023 25.481 135.023 22.9106C135.023 20.3402 136.762 18.7022 139.03 18.7022C141.298 18.7022 143.011 20.3402 143.011 22.9106C143.011 25.481 141.298 27.119 139.03 27.119Z" fill="white"></path>
                              <path d="M152.349 29.8154C156.129 29.8154 158.448 28.1774 158.448 25.6574C158.448 20.3906 150.132 22.8098 150.132 20.0882C150.132 19.2062 151.039 18.5762 152.954 18.5762C154.239 18.5762 155.524 18.8282 156.81 19.5842L158.019 17.1902C156.81 16.4594 154.768 16.031 152.979 16.031C149.35 16.031 147.057 17.6942 147.057 20.2394C147.057 25.607 155.373 23.1878 155.373 25.7582C155.373 26.6906 154.542 27.245 152.551 27.245C150.862 27.245 149.048 26.6906 147.864 25.9094L146.654 28.3034C147.864 29.1602 150.106 29.8154 152.349 29.8154Z" fill="white"></path>
                              <defs>
                                <linearGradient id="paint0_linear_78_229" x1="37.6621" y1="10.4038" x2="6.06332" y2="35.83" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="white" stop-opacity="0.15"></stop>
                                  <stop offset="0.88952" stop-color="white"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_78_229" x1="32.0852" y1="3.78236" x2="4.48393" y2="32.3413" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.151215" stop-color="white"></stop>
                                  <stop offset="1" stop-color="white" stop-opacity="0.15"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                            <div>
                              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.8203" cy="20.1242" r="20.1242" fill="#151515"></circle>
                                <path d="M29.2828 15.0043C28.6687 15.2736 28.0144 15.4522 27.3323 15.5389C28.0341 15.1199 28.5697 14.4614 28.8215 13.6678C28.1672 14.0579 27.4448 14.3335 26.6749 14.4872C26.0536 13.8257 25.1682 13.416 24.2022 13.416C22.3281 13.416 20.8193 14.9372 20.8193 16.802C20.8193 17.0704 20.842 17.3284 20.8977 17.574C18.0834 17.4367 15.5932 16.0879 13.9203 14.0332C13.6282 14.5399 13.4569 15.1199 13.4569 15.7442C13.4569 16.9166 14.0606 17.9558 14.9605 18.5575C14.4167 18.5472 13.8831 18.3893 13.4311 18.1406C13.4311 18.1509 13.4311 18.1643 13.4311 18.1777C13.4311 19.8227 14.6045 21.1891 16.1432 21.5039C15.8677 21.5792 15.5674 21.6154 15.2557 21.6154C15.039 21.6154 14.8202 21.603 14.6148 21.5576C15.0534 22.8981 16.298 23.8837 17.7779 23.9157C16.6262 24.8167 15.1638 25.3595 13.5807 25.3595C13.3031 25.3595 13.0369 25.3471 12.7706 25.3131C14.2701 26.28 16.0472 26.8322 17.9637 26.8322C24.1929 26.8322 27.5985 21.6721 27.5985 17.1994C27.5985 17.0497 27.5934 16.9052 27.5862 16.7618C28.258 16.285 28.8225 15.6895 29.2828 15.0043Z" fill="white"></path>
                              </svg>
                              <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 20px; margin-right: 20px">
                                <circle cx="21.0688" cy="20.1242" r="20.1242" fill="#151515"></circle>
                                <g clip-path="url(#clip0_78_82)">
                                  <path d="M28.2645 15.56C27.8305 14.788 27.3595 14.646 26.4005 14.592C25.4425 14.527 23.0335 14.5 20.9465 14.5C18.8555 14.5 16.4455 14.527 15.4885 14.591C14.5315 14.646 14.0595 14.787 13.6215 15.56C13.1745 16.331 12.9445 17.659 12.9445 19.997C12.9445 19.999 12.9445 20 12.9445 20C12.9445 20.002 12.9445 20.003 12.9445 20.003V20.005C12.9445 22.333 13.1745 23.671 13.6215 24.434C14.0595 25.206 14.5305 25.346 15.4875 25.411C16.4455 25.467 18.8555 25.5 20.9465 25.5C23.0335 25.5 25.4425 25.467 26.4015 25.412C27.3605 25.347 27.8315 25.207 28.2655 24.435C28.7165 23.672 28.9445 22.334 28.9445 20.006C28.9445 20.006 28.9445 20.003 28.9445 20.001C28.9445 20.001 28.9445 19.999 28.9445 19.998C28.9445 17.659 28.7165 16.331 28.2645 15.56ZM18.9445 23V17L23.9445 20L18.9445 23Z" fill="white"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_82">
                                    <rect width="16" height="16" fill="white" transform="translate(12.9445 12)"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.3172" cy="20.1242" r="20.1242" fill="#151515"></circle>
                                <g clip-path="url(#clip0_78_88)">
                                  <path d="M28.189 28V27.9994H28.193V22.1314C28.193 19.2607 27.575 17.0493 24.219 17.0493C22.6057 17.0493 21.523 17.9347 21.081 18.774H21.0343V17.3173H17.8523V27.9994H21.1657V22.71C21.1657 21.3174 21.4297 19.9707 23.1543 19.9707C24.8537 19.9707 24.879 21.56 24.879 22.7994V28H28.189Z" fill="white"></path>
                                  <path d="M12.457 17.3179H15.7743V27.9999H12.457V17.3179Z" fill="white"></path>
                                  <path d="M14.1143 12C13.0537 12 12.193 12.8607 12.193 13.9213C12.193 14.982 13.0537 15.8607 14.1143 15.8607C15.175 15.8607 16.0357 14.982 16.0357 13.9213C16.035 12.8607 15.1743 12 14.1143 12V12Z" fill="white"></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_88">
                                    <rect width="16" height="16" fill="white" transform="translate(12.193 12)"></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div class="sm-my-15px" style="margin-top: 30px; margin-bottom: 30px; border-width: 1px; border-bottom-width: 0px; border-style: solid; border-color: #fff; opacity: 0.2"></div>
                          <div class="sm-text-10px" style="text-align: left; font-size: 14px; color: #fff">
                            <p style="margin-bottom: 0">
                              Find Labs Inc.<br>548 Market St #71364, San Francisco, CA 94104
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-left: 24px; padding-right: 24px; text-align: center; color: #A3A4AE">
                        <p class="sm-mt-3 sm-text-10px" style="margin-top: 20px; cursor: default">
                          <a href="https://maizzle.com/docs/" class="hover-text-decoration-underline" style="text-decoration: none; color: #A3A4AE">Blog</a>
                          &nbsp;&#124;&nbsp;
                          <a href="https://github.com/maizzle" class="hover-text-decoration-underline" style="text-decoration: none; color: #A3A4AE">Terms</a>
                          &nbsp;&#124;&nbsp;
                          <a href="https://twitter.com/maizzlejs" class="hover-text-decoration-underline" style="text-decoration: none; color: #A3A4AE">Docs</a>
                          &nbsp;&#124;&nbsp;
                          <a href="https://twitter.com/maizzlejs" class="hover-text-decoration-underline" style="text-decoration: none; color: #A3A4AE">Find Community</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>  </div>
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
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  providers.push(
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
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
      secretAccessKey: process.env.FIND_SES_AWS_SECRET_ACCESS_KEY,
    },
  });

  const transport = createTransport({
    SES: { ses, aws },
  });

  providers.push(
    EmailProvider({
      async sendVerificationRequest(params) {
        const { identifier, url } = params;
        const user = await prisma.user.findFirst({ where: { email: identifier } });
        const { host } = new URL(url);
        const result = await transport.sendMail({
          to: identifier,
          from: process.env.EMAIL_FROM,
          subject: 'Welcome to Findlabs',
          text: text({ url, host }),
          html: html({ url, host, join: !user }),
        });
        const failed = result.rejected?.concat(result.pending).filter(Boolean);
        if (failed && failed.length) {
          throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
        }
      },
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
          ...(token.user as object),
        };
      }
      return session;
    },
    jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const image = user.image || profile?.avatar_url;
        token.user = {
          ...user,
          image,
        };
      }
      return token;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers,
  pages: {
    verifyRequest: '/auth/verify',
  },
};

export default NextAuth(authOptions);
