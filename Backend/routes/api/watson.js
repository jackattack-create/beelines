// Import Dependencies 
const express = require('express');
const router = express.Router();
const AssistantV2 = require('ibm-watson/assistant/v2');
const {IamAuthenticator} = require('ibm-watson/auth');

//Create Instance of Assistant 

//First Auth
// const authenticator = new IamAuthenticator({
//     apikey: `Ml2xxJX4OHwdWJxsTrxSPQ-2IuTj1FgeHOgsjIJrOTo4`,
// })

//Connect to assistant
// const assistant = new AssistantV2({
//     version: '2021-11-27',
//     serviceName: 'assistant',
//     authenticator: authenticator,
//     url: "https://api.us-east.assistant.watson.cloud.ibm.com/instances/5afbfd57-0e34-4b35-bae1-02250302d6b1",
// })

const assistant = new AssistantV2({
    version: '2021-11-27',
    authenticator: new IamAuthenticator({
      apikey: 'Xu-Rw5hpriOXNKY7x1zyGQ07FjP0TdHfg1-l8vz9Fic1',
    }),
    serviceUrl: 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/5afbfd57-0e34-4b35-bae1-02250302d6b1',
  });

//Route to handle session tokens
//GET REQUESTS 
router.get("/session", async (req, res) => {
    try {
        const session = await assistant.createSession({
            assistantId:"d975944c-94ae-461a-83ac-2d730b07ae0d"
        })
        res.json(session['result'])
    } catch (err) {
        res.send("There was an error processing your request.");
        console.log(err);
    }
})

//Handle Messages

//Export Routes
module.exports = router