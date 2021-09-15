import { useState } from "react";
import Container from "@organism/Container";
import Layout from "@organism/Layout";
import makedelay from "@utils/makedelay";

export default function index() {
    const tabList = ['flight', 'hotel'];
    const [tabs, setTabs] = useState(tabList[0]);
    const autoComplete = (e) => {
        const delay = makedelay(500);
        delay(() => console.log(e));
    }
    return (
        <Layout>
            <Container>
                <div className="mt-20">
                    <ul className='flex cursor-pointer'>
                        {tabList.map(v => (
                            <li onClick={()=>setTabs(v)} className={`py-2 px-12 border rounded-t-lg text-gray-500 ${v === tabs ? 'bg-blue-200' : ''}`}>{v}</li>
                        ))}
                    </ul>
                </div>
                <div className="border rounded-r-lg rounded-b-lg p-4 shadow-lg">
                    <div className="border rounded-lg p-4 flex">
                        <div className="w-4/12">
                            <input className="border rounded-l px-3 py-1 w-full" onKeyUp={autoComplete} placeholder="cari"/>
                            <div className="border rounded-lg">
                                <ul>
                                    <li className="p-3 hover:bg-blue-200 cursor-pointer">Aston Canggu</li>
                                    <li className="p-3 hover:bg-blue-200 cursor-pointer">Aston Canggu</li>
                                    <li className="p-3 hover:bg-blue-200 cursor-pointer">Aston Canggu</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </Container>
        </Layout>
    )
}
