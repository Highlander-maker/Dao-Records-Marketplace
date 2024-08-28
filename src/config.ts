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
                "juno1egtz6ld552j2x5tyjylg0533e3aewxdl6vqc8mwacva4mwwvw8zq6l02p8",
            cw721: "juno13qrtuw450lreq2mgj3r546hu97rjs085usddzqt56djcs2q75zpqeslxe9",
            name: "Event Tickets",
            type: ICollectionType.CROWDFUND,
            id: "crowdfund",
        },
      
    ],
};

export default CONFIG;