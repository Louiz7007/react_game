export function Button(props: {text: string}) {
    const style = {
        color: '#FCFAF9',
        background: '#F3D3BD',
        fontSize: '10vh',
        fontFamily: 'Montserrat'
    }
    return (
        <div className={'button'}>
        <button style={style}>
            <span>{props.text}</span>
        </button>
        </div>
    )
}