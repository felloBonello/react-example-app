export default function ListF({items}) {

    return (
        <ul>
            {items?.map((item) => (
                <li key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>
    )
}