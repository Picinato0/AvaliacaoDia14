import { useState } from 'react'

import MyTable from '../../components/MyTable/IndexTable'

import listPessoas from '../../data/pessoas.json'


function LandingPage() {
    const [pessoas] = useState(listPessoas);

    return(
        <>
            <MyTable pessoas={pessoas} />
        </>
    );
}

export default LandingPage;