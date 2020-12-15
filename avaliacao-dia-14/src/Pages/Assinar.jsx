import { useState } from 'react';
import './assinar.css' 


function Assinar() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [data, setData] = useState("");

    function handleSubmit(event) {

        const pessoa = {
            nome: nome,
            email: email,
            tel: tel,
            data: data
        }

        console.log(pessoa);

        event.preventDefault();
    }

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    }
    const handleChangeIdade = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeTel = (e) => {
        setTel(e.target.value);
    }
    const handleChangeData = (e) => {
        setData(e.target.value);
    }

    return(
        <>
            <h1 className="TextForm">Assine para adquirir uma amostra do nosso produto</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input className="FormAssinar" onChange={handleChangeNome} type="text" value={nome} />
                </label>
                <label>
                    Email:
                    <input className="FormAssinar" onChange={handleChangeIdade} type="text" value={email} />
                </label>
                <label>
                    Telefone:
                    <input className="FormAssinar" onChange={handleChangeTel} type="text" value={tel} />
                </label>
                <label>
                    Data de nascimento:
                    <input className="FormAssinar" onChange={handleChangeData} type="text" value={data} />
                </label>
                <input type="checkbox" value="Check"/>
                Aceita receber nossa Newsletter?
                <input className="AssinarBotao" type="submit" value="Assinar" />
            </form>
        </>
    );
}
export default Assinar;