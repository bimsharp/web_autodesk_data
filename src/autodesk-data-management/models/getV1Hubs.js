class AutodeskHub {
    type; //string
    id; //string
    attributes; //string, json

    constructor(data) {
        this.type = data?.type;
        this.id = data?.id;
        this.attributes = data?.attributes;
    }
}
class AutodeskHubs {
    data;

    constructor(data) {
        this.data = [];
        data.data.forEach(hub => {
            this.data.push(new AutodeskHub(hub));
        });
    }
}
class GetAutodeskHubsPayload {
    autodesk_access_token;
    autodesk_user_id;

    constructor() { }
}

module.exports = {
    AutodeskHubs,
    AutodeskHub,
    GetAutodeskHubsPayload
}