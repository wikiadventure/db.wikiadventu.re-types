///////////////////////////////////
//////////   WEBSOCKET   //////////
///////////////////////////////////
export var WebsocketStatus;
(function (WebsocketStatus) {
    WebsocketStatus[WebsocketStatus["OPEN"] = 0] = "OPEN";
    WebsocketStatus[WebsocketStatus["CLOSED"] = 1] = "CLOSED";
    WebsocketStatus[WebsocketStatus["RECONNECTING"] = 2] = "RECONNECTING";
})(WebsocketStatus || (WebsocketStatus = {}));
