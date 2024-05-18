import React, { useState } from 'react';
import SignUpCard from '@/components/cards/signup';


export default function Register({
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
            <SignUpCard message={searchParams.message} />
        </main>
    )
}
