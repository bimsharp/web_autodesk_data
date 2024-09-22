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

module.exports = {
    AutodeskHubs,
    AutodeskHub
}