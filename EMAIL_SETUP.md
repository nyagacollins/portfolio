# Email Setup Guide

Your contact form is now configured to send emails to your Gmail using Resend.

## Setup Steps:

### 1. Create a Resend Account
- Go to [https://resend.com](https://resend.com)
- Sign up for a free account (100 emails/day free)

### 2. Get Your API Key
- After signing in, go to [API Keys](https://resend.com/api-keys)
- Click "Create API Key"
- Give it a name like "Portfolio Contact Form"
- Copy the API key (it starts with `re_`)

### 3. Add API Key to Your Project
- Open the file `-website/.env.local`
- Add your API key:
  ```
  RESEND_API_KEY=re_your_actual_api_key_here
  ```

### 4. Restart Your Development Server
```bash
npm run dev
```

### 5. Test the Contact Form
- Fill out the contact form on your portfolio
- You should receive an email at: ndegecollins20@gmail.com

## Important Notes:

- The free tier allows 100 emails per day
- Initially, you can only send from `onboarding@resend.dev`
- To use your own domain (like contact@yourdomain.com):
  1. Add and verify your domain in Resend
  2. Update the `from` field in `-website/app/api/contact/route.ts`

## Troubleshooting:

If emails aren't arriving:
1. Check your spam folder
2. Verify the API key is correct in `.env.local`
3. Check the server console for error messages
4. Make sure you restarted the dev server after adding the API key

## Alternative: Using Gmail SMTP Directly

If you prefer to use Gmail SMTP instead of Resend, let me know and I can set that up for you!
