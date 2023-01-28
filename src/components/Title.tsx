export function Title(props: { text: string }) {
    const style = {
        color: '#FCFAF9',
        fontSize: '10vh',
        fontFamily: 'Montserrat'
    }

    return (
        <div className={'title'}>
        <h1 style={style}>{props.text}</h1>
        </div>
    )
}