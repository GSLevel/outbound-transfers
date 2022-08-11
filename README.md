# Outbound Transfers DSJAS Module
- **"Transfer" to a scammer's bank account**
- **"Transfer" to a zelle email**
- **Get ALL the information sent to you via a discord webhook**

<p align="center">
This module allows you to 'send' money to a scammer's bank account or zelle email.
</p>

<p align="center">
How is this even possible with DSJAS?
The money would be sent to a 'ghost' account, account 999,999 to be exact, which doesn't exist, but the money is still deducted from your balance anyway and the transfer's a success.
</p>  
<p align="center">
What's one of the best parts of this module?
Discord Webhooks. In order to use them, you need to type in the following code in your console in your Virtual Machine: localStorage.setItem('DiscordWebhook', 'YOUR URL')
It should be self-explanatory of what you would replace YOUR URL with (make sure to keep in in the quotation marks).
  </p>
<p align="center">
If you don't want to use webhooks, type in localStorage.setItem('DiscordWebhook', undefined) instead. Fun fact, if you type in localStorage.setItem('DiscordWebhook', ''), you get an error when transferring, I don't know why, but that's how it is.
  </p>
<p align="center">
  <b>Happy scambating!</b>
</p>
