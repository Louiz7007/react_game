import './styles/Title.style.css';

export function Title(props: {text: string}) {

    return (
        <h1>{props.text}</h1>
    )
}