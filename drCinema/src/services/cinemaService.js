const APIKEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNDgxZGQ2MDJkMDc3OTYyOTVhNzYiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhseW51ciBNYWdudXNzb24iLCJlbWFpbCI6ImhseW51ci5tYWdudXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJobHludXJtIiwicGFzc3dvcmQiOiIkMmEkMDgkbEt4T3o1U0c4UVJCMUIwc2dNZTdpLmVpb00xWkdwM052ZHlNb25pclN5VFNGY0dOMTNROEsiLCJkb21haW4iOiJuYSIsIm1lc3NhZ2UiOiJTY2hvb2wgcHJvamVjdCBmb3IgSFIiLCJpYXQiOjE1NzU5MDA4OTAsImV4cCI6MTU3NTk4NzI5MH0.jT_MpRLBfN-nW6XbuJIR42WwFpeYonsbVS4gA-rwfg8';
const endpoint = 'http://api.kvikmyndir.is/theaters';

const CinemaService = () => {
  console.log("YO")
  return {
    getAllCinemas: () => {
        console.log("Im here");
      /*  fetch(endpoint, {
        headers: {
            "x-access-token": APIKEY
        }
    })
    .then((d) => d.json()
    .then((data) => console.log(data))
    .catch((error) => {
        console.error(error);
      }))*/
    }
}
}

export default CinemaService;
