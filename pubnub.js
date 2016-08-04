   
   (function() { 
    
    pubnub = PUBNUB({ 
        publish_key:'pub-c-cb56e24e-cc9a-4cd7-9088-8b2e55724f34',
        subscribe_key :'sub-c-dd6ef3fa-fb6e-11e5-8cfb-0619f8945a4f',
        ssl:(("https:"==document.location.protocol)
        ?true:false)
    })
     
    console.log("Subscribing..");
    pubnub.subscribe({                                     
        channel : "hello_world",
        message : function (message, envelope, channelOrGroup, time, channel) {
          console.log(
          "Message Received." + "\n" +
          "Channel or Group: " + JSON.stringify(channelOrGroup) + "\n" +
          "Channel: " + JSON.stringify(channel) + "\n" +
          "Message: " + JSON.stringify(message) + "\n" +
          "Time: " + time + "\n" +
          "Raw Envelope: " + JSON.stringify(envelope)
        )},
        connect: pub
    })
 
    function pub() {
       pubnub.publish({                                    
            channel : "hello_world",
            message : "Hello from PubNub Docs!",
            callback: function(m){ console.log(m) }
       })
    }
})();


publish();