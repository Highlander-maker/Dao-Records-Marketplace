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
                "juno1k04tpl9ly5uay3vkc8jktwaj6j8u2d3rxj5md78t8345gxssrf0qhu037s",
            cw721: "juno12lmypcvnw0v8dyjh4dc4f8flljyf7v2sqkxmkdne6qdgulxxx7qq4a7rcn",
            name: "Event Tickets",
            type: ICollectionType.CROWDFUND,
            id: "crowdfund",
        },
      
    ],
};

export default CONFIG;