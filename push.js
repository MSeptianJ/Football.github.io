let webPush = require("web-push");

const vapidKeys = {
    "publicKeys": "BLT6nbHwKd7-b3Zc9Hc2Bzy4dhRZrq7LTFs7A-_T4BdKehB9aMDV5mNbiqOoTOyOp5rpB2S074S1EsDZQww_Nmo",
    "privateKeys": "AspAx4UyjBrU8Kzsjv_eFoGwJnAwDTdEQiCijXmdwNg"
}

webPush.setVapidDetails(
    "mailto:example@yourdomain.org",
    vapidKeys.publicKeys,
    vapidKeys.privateKeys
)

let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/daFFSEUc1c4:APA91bHbamyP96VE3Rujw4zD9XxowUT5IQI6AeidobLLoSNOo2JzXwk2TNOk05CcwMQork84riwkCwzVcRZXPrv6tJjPUkHV7IUdIuHmCTCC9BPZ2fJ3gOE8t4CnUltWsXyMaxV6sDEX",
    "keys": {
        "p256dh": "BOHcGHKz9XDVN3FkiXWOe0Dg4UR13Qmco6f9BUCKAuOZfSXE7wzAIgMGpGw8AuoJbEsctg+hGknlohIKcNNNvGA=",
        "auth": "8E+KrDifNN5mIW8Zge3SPQ=="
    }
};

let payload = "Thank you for using this app";

let options = {
    gcmAPIKey: "721258085263",
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
)
