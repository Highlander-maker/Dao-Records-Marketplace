"use client"; 

import React, { FC, useEffect, useState } from "react";
import { getAllApps, getClient } from "@/lib/database/get";
import { HomePage } from "@/modules/home";

interface Props {
    params: {
        chain: string;
    }
}

const Page: FC<Props> = (props) => {
    const { chain } = props.params;
    const [apps, setApps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching client...");
                const client = await getClient(chain);
                console.log("Client fetched:", client);

                console.log("Fetching apps...");
                const apps = await getAllApps(client);
                console.log("Apps fetched:", apps);

                setApps(apps);
            } catch (error) {
                console.error("Error fetching apps:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [chain]);

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log("Rendering HomePage with apps:", apps);

    return (
        <HomePage apps={apps} chainId={chain} />
    );
};

export default Page;
