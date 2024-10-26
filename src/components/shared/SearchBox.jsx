import { Input } from 'antd';
export default function SearchBox() {
    const { Search } = Input;
    return (
        <>
            <Search className='p-4' placeholder="input search text" onSearch={console.log("done")
            } enterButton />

        </>
    )
}
