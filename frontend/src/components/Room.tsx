import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        //logic to initialize user for the room
    }, [name])

    return <>
        <h1>Hi {name}</h1>
    </>
}

export default Room