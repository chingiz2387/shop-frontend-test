
let port;

if (process.env.REACT_APP_NODE_ENV === "test") {
    port = 8010;
} else {
    port = 8000;
}

const config = {
    apiURL: 'http://localhost:' + port,
    facebookAppId: "1221301334742046"
};

export default config;
