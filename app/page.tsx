"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();

    useEffect(() => console.log(session, status), [session, status]);

    return <main className="">{/* <p>{JSON.stringify(session)}</p> */}</main>;
}
