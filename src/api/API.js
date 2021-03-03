
export const mapBoxAccessToken = "pk.eyJ1IjoibWFoZGluNzUiLCJhIjoiY2psZzZoZmpsMTRnODN3bzNuZmY2aG5vdiJ9.QD_4b8WNG08FHZbULd6s7Q";
export const mapIrStyleUrl = "https://map.ir/vector/styles/main/mapir-xyz-style.json";
export const mapIrAccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU2YTMwMmJhM2Y2MTE2YTJlOGMyNjk4ZjZkYjY1NDBlZTVhMTY0ZWM0MDFmODA4MGMzNzA2Y2E1YjVjZWE3MTQ3NTAyMWNiNjdjNGRmNDJiIn0.eyJhdWQiOiIxMzAwOSIsImp0aSI6IjU2YTMwMmJhM2Y2MTE2YTJlOGMyNjk4ZjZkYjY1NDBlZTVhMTY0ZWM0MDFmODA4MGMzNzA2Y2E1YjVjZWE3MTQ3NTAyMWNiNjdjNGRmNDJiIiwiaWF0IjoxNjE0NzEyNTIyLCJuYmYiOjE2MTQ3MTI1MjIsImV4cCI6MTYxNzIxNDUyMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.BsDsNVrzoCV_ZiHQwc6Qi_3st8TADMn3dAJygylvfRCQBf46-ScJ_-S1yaOBjdXovAt2CATXsq6u7Z4Lx_xU6R7ussGUj5CGYhXlAVRIvsJJMBQ0ld58i3wLCppho3seFRSe5Rng3CIphGOMQ1V4hIODy40bIenEQIWZ-Gi1kJUz467_D1r7O2F6sfSnbQSfvD9LdpUHNosZXjSK_tjUusgVM1nqvL98cKINfq1sGGrx1sNvZItOdwL9MfetfCAwn5VIPHDcVp8zXEX4_JN6Dvg516j7ttHkMNfaDyEvwLf0ZkRbGDv0p5PYue2bk4jy82BNyGn7Z-52scjvw0de0A";
export const APIUrl = "https://map.ir";

export function geocodeRequest(lonlatArray){
    return fetch(`${APIUrl}/reverse?lat=${lonlatArray[1]}&lon=${lonlatArray[0]}`, {
                "headers": {
                    "accept": "application/json",
                    "x-api-key": mapIrAccessToken
                },
    });
}
export function searchRequest(text){
    return fetch(`${APIUrl}/search/v2/?text=${text}`, {
                "headers": {
                    "accept": "application/json",
                    "x-api-key": mapIrAccessToken
                },
    });
}