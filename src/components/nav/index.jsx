import { Button, HStack, Text } from "@chakra-ui/react";

const LINKS = [
    'Home',
    'Download',
    'App',
    'Login'
]

const Nav = () => {

    const Link = (title) => {
        return (
            <a href={'/'}>
                <Button bgColor={'transparent'}   
                    paddingX={'1.5rem'}
                    _hover={{ border: '1px solid white' }}>
                    <Text fontSize={'md'} color="white">{title}</Text>
                </Button>
            </a>
        )
    }

    return (
        <HStack pl={'100px'} pt={'30px'} columnGap={4}>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAzNiA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk5MjYgMS4wNjEzMUMxNy4xMzAyIDAuNDA0NTY4IDE4LjUzMTYgMC40MDQ1NjcgMTkuNjY5MSAxLjA2MTMxTDMxLjQzNDYgNy44NTQxNEMzMi41NzIxIDguNTEwODcgMzMuMjcyOSA5LjcyNDU4IDMzLjI3MjkgMTEuMDM4MVYyNC42MjM3QzMzLjI3MjkgMjUuOTM3MiAzMi41NzIxIDI3LjE1MDkgMzEuNDM0NiAyNy44MDc2TDE5LjY2OTEgMzQuNjAwNUMxOC41MzE2IDM1LjI1NzIgMTcuMTMwMiAzNS4yNTcyIDE1Ljk5MjYgMzQuNjAwNUw0LjIyNzEyIDI3LjgwNzZDMy4wODk2MiAyNy4xNTA5IDIuMzg4ODkgMjUuOTM3MiAyLjM4ODg5IDI0LjYyMzdWMTEuMDM4MUMyLjM4ODg5IDkuNzI0NTggMy4wODk2MiA4LjUxMDg3IDQuMjI3MTIgNy44NTQxNEwxNS45OTI2IDEuMDYxMzFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfM184ODgpIi8+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpoYXJkLWxpZ2h0Ij4KPHBhdGggZD0iTTE2LjE3NjUgMTUuMjkzNEMxNy4yMDAyIDE0LjcwMjQgMTguNDYxNSAxNC43MDI0IDE5LjQ4NTMgMTUuMjkzNEwzMS42MTg1IDIyLjI5ODVDMzIuNjQyMiAyMi44ODk2IDMzLjI3MjkgMjMuOTgxOSAzMy4yNzI5IDI1LjE2NFYzOS4xNzQyQzMzLjI3MjkgNDAuMzU2MyAzMi42NDIyIDQxLjQ0ODcgMzEuNjE4NSA0Mi4wMzk3TDE5LjQ4NTMgNDkuMDQ0OEMxOC40NjE1IDQ5LjYzNTkgMTcuMjAwMiA0OS42MzU5IDE2LjE3NjUgNDkuMDQ0OEw0LjA0MzMgNDIuMDM5N0MzLjAxOTU0IDQxLjQ0ODcgMi4zODg4OSA0MC4zNTYzIDIuMzg4ODkgMzkuMTc0MlYyNS4xNjRDMi4zODg4OSAyMy45ODE5IDMuMDE5NTQgMjIuODg5NiA0LjA0MzMgMjIuMjk4NUwxNi4xNzY1IDE1LjI5MzRaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfM184ODgpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8zXzg4OCIgeDE9IjE3LjgzMDkiIHkxPSIwIiB4Mj0iMTcuODMwOSIgeTI9IjM1LjY2MTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAxQjNGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2QkQ5OTciLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzNfODg4IiB4MT0iMTcuODMwOSIgeTE9IjE0LjMzODIiIHgyPSIxNy44MzA5IiB5Mj0iNTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzQzMDFGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEOTZCQ0UiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" alt="title" />
            {LINKS.map(link => (
                Link(link)
            ))}
            <Button bgColor={'#121B52'} border={'1px solid white'} borderRadius={'15px'} _hover={{ bgColor: '#121B52' }} width={'148px'}>
                <Text color="white" fontWeight={'bold'}>Get Started</Text>
            </Button>
            <h1></h1>

        </HStack>
    )
}

export default Nav;