import PocketBase from 'pocketbase';

export default function database() {

    const build: string = "dev";

    var url: string = ''

    if (build === "dev") {
        url =  "http://0.0.0.0:8090/";
    }
    if (build === "prod") {
        url = "http://23.239.16.103:8090/";
    }

    return new PocketBase(url);
}