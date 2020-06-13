import React from 'react';

export default function({ user }) {
    return <div>
        {
            user && (<div>
                <img src={user.avatar} />
                <br />
                Email: { user.email }
            </div>)
        }
    </div>
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
            { params: { id: '6' } },
            { params: { id: '7' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const result = await fetch(`https://reqres.in/api/users/${id}`);
    const user = await result.json();

    return {
        props: {
            user: user.data
        }
    }
}