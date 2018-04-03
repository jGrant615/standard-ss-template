const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
    client_id: '91EoW1OO88Q4ecPPyaRy6qMffDC3Il0NwN5xuuZ8gP',
    client_secret: 'pAj1p9ENVPPsCLUTk8oVMOerqiJpjzY8mOvfoheOeP'
});

Moltin.Authenticate().then((response) => {
    console.log('authenticated', response);
});