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
Discord Webhooks, <b>so you can log all of the scammer's data (Bank Account Name, Address, Bank Account Number, Account Type, Zelle Name, Zelle Email, Amount Transferred and the Memo.</b> In order to use them, you need to type in the following code in your console in your Virtual Machine:
</p>

 ```javascript
 
 localStorage.setItem('DiscordWebhook', 'YOUR URL') 
 
 ```
 
<p align="center">
It should be self-explanatory of what you would replace YOUR URL with (make sure to keep in in the quotation marks).
  </p>
<p align="center">
 <b>If you don't want to use webhooks, type in the following instead:</b> 
 </p>
 
 ```javascript
 
 localStorage.setItem('DiscordWebhook', undefined)
 
 ```
 
 <p align="center">
 Fun fact, if you type in </p> 
 
 ```javascript
 
 localStorage.setItem('DiscordWebhook', '')
 
 ```
 <p align="center">
 you get an error when transferring, I don't know why, but that's how it is. There's also a confirmation before transferring, this is just so the discord webhook message can have the opportunity to be sent.
  </p>
<p align="center">
  <b>Happy scambating!</b>
</p>

Screenshots of the module:

![image](https://user-images.githubusercontent.com/67515314/184527919-d70cbe0e-1765-4149-be96-6d264be3ccdb.png)
![image](https://user-images.githubusercontent.com/67515314/184527926-05dc95ca-e1bc-4e5c-a8c1-f2df7768efd6.png)
![image](https://user-images.githubusercontent.com/67515314/184527932-06820ca2-c253-42ca-9742-cc671edb57f3.png)


Discord webhook messages:

![image](https://user-images.githubusercontent.com/67515314/184527254-ee6d7182-ae91-4909-8bfc-36552eedd53a.png)
(The default webhook's name would be whatever you put it as when you created your webhook, in my case I put Bhenchod Catcher)

