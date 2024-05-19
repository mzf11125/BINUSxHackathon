import React, { useState } from 'react';
import LoginCard from '@/components/cards/login';


export default function Login({
    searchParams,
  }: {
    searchParams: { message: string };
  }) {

    return (
        <main
            style={{
                backgroundColor: "#4B0082",
                animation: "colorChange 5s infinite",
            }}
            className="flex min-h-screen flex-col items-center justify-center p-48 h-screen"
        >
            <h1 className="text-6xl font-bold text-white mb-8">AccessAble</h1>
            <LoginCard message={searchParams.message} />
        </main>
    )
}
