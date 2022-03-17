import client from "../config/client.js";

let skins = {
    getSkins: () => {
        // return client.get("apiFake.json");
        return [{
                "id": 1,
                "name": "ak-47",
                "model": "",
                "category": 1,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHNCrtbLwDHMVKWFaDAzluXixne4-fAjIHQ&usqp=CAU",
                "price": 65,
                "stock": 9
            },
            {
                "id": 2,
                "name": "M4A4",
                "model": "",
                "category": 1,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH7PbvCKSkfr_9Za2QsALnoHyLDW6Fa0TxA&usqp=CAU",
                "price": 12,
                "stock": 32
            },
            {
                "id": 6,
                "name": "AWP",
                "model": "",
                "category": 1,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2h1iZlpfu5y_8-wRWscp77P0_Hp3_8vIAg&usqp=CAU",
                "price": 81,
                "stock": 15
            },
            {
                "id": 23,
                "name": "Revólver R8",
                "model": "",
                "category": 2,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-9VNJ4bjKkVrUzz4zy3KmbiZhgP5qE8Evw&usqp=CAU",
                "price": 3,
                "stock": 168
            }
        ]
    },
};
export default skins;