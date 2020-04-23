const dev = {
    apiGateway: {
        URL: 'http://localhost:8080/api/v1',
        BASE_PATH: '',
    },
}

const prod = {
    apiGateway: {
        URL: 'https://hand2hold.us/api/v1',
        BASE_PATH: '',
    },
}

let config

switch (process.env.REACT_APP_STAGE) {
    case 'dev':
        config = dev
        break
    case 'prod':
        config = prod
        break
    default:
        config = dev
        break
}

export default config
