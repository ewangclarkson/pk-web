const apiHost='https://pk-api-gateway.onrender.com';

export const environment = {
  apiHost:apiHost,
  userApiUrl:`${apiHost}/user-service`,
  packageApiUrl:`${apiHost}/package-service`,
  deliveryApiUrl:`${apiHost}/delivery-service`,
  wsHost:'https://pk-delivery-service.onrender.com',
  googleMapApiKey:"AIzaSyCbbqBUVGdfxZ7okId4BVM_Dyc2jePnyRk"
};
