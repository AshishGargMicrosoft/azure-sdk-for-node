// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.EventHub/namespaces/nodetestEH-NS1/eventhubs/nodetestEH2/authorizationRules/Send/ListKeys?api-version=2015-08-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=zms/5YT7MEj6e06dGHvsseZtHwQrXLEiLStkDEU5XO8=;EntityPath=nodetestEH2\",\"secondaryConnectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=UwvlzxdDu30JEBybJWA0h6e1ky3nrdiOIUr7MaEQglw=;EntityPath=nodetestEH2\",\"primaryKey\":\"zms/5YT7MEj6e06dGHvsseZtHwQrXLEiLStkDEU5XO8=\",\"secondaryKey\":\"UwvlzxdDu30JEBybJWA0h6e1ky3nrdiOIUr7MaEQglw=\",\"keyName\":\"Send\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '522',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ca0bb74-d467-486f-b05c-30c790d73c92_M6_M6',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5c009a02-c836-4342-8fd3-e0cc61109e87',
  'x-ms-routing-request-id': 'WESTUS:20170502T195132Z:5c009a02-c836-4342-8fd3-e0cc61109e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.EventHub/namespaces/nodetestEH-NS1/eventhubs/nodetestEH2/authorizationRules/Send/ListKeys?api-version=2015-08-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=zms/5YT7MEj6e06dGHvsseZtHwQrXLEiLStkDEU5XO8=;EntityPath=nodetestEH2\",\"secondaryConnectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=UwvlzxdDu30JEBybJWA0h6e1ky3nrdiOIUr7MaEQglw=;EntityPath=nodetestEH2\",\"primaryKey\":\"zms/5YT7MEj6e06dGHvsseZtHwQrXLEiLStkDEU5XO8=\",\"secondaryKey\":\"UwvlzxdDu30JEBybJWA0h6e1ky3nrdiOIUr7MaEQglw=\",\"keyName\":\"Send\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '522',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ca0bb74-d467-486f-b05c-30c790d73c92_M6_M6',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5c009a02-c836-4342-8fd3-e0cc61109e87',
  'x-ms-routing-request-id': 'WESTUS:20170502T195132Z:5c009a02-c836-4342-8fd3-e0cc61109e87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:51:32 GMT',
  connection: 'close' });
 return result; }]];