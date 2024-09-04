import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ujunox",
    name: "Dao Records",
    chainId: "uni-6",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "Juno Testnet",
    collections: [
       
        {
            marketplace:
                "juno1gukvjpdfurdyfnd4auazd7te3l2hkg2yl9m5zymsjlza867nm24s7hgvw7",
            cw721: "juno18f302tep0aatdrtez8cskjcukw6r22f0hgy9q4qvmpp043dxrdxqm5vhf9",
            name: "Audio Releases",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        },
        {
            crowdfund:
                "juno1743zh0hyfzq4u075k2f6t5x8g8yj2u0x52khhdpnafpq9gx3zrusn5857l",
            cw721: "juno1slqvn6k9p9nm6ywpgsa2eh9yd8uvrx8d3wk4h9g98fpqu20lny7qn2x6j4",
            name: "Event Tickets",
            type: ICollectionType.CROWDFUND,
            id: "crowdfund",
        },
      
    ],
};

export default CONFIG;