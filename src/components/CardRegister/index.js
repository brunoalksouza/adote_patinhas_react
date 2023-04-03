import './CardRegister.css';
import { useState } from 'react';
import Banner from '../Banner';
import BoxDescription from '../BoxDescription';
import BoxText from '../BoxText';
import BoxTextInfo from '../BoxTextInfo';
import ListSuspended from '../ListSuspended';
import ListSuspendedCastrated from '../ListSuspendedCastrated';
import ListSuspendedSex from '../ListSuspendedSex';
import ListSuspendedSize from '../ListSuspendedSize';
import Button from '../Button';

const CardRegister = (props) => {

    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [vaccinated, setVaccinated] = useState('')
    const [castrated, setCastrated] = useState('')
    const [description, setDescription] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [size, setSize] = useState('')

    const toRegister = (evento) => {
        evento.preventDefault()
        props.theNewRegister ({
            name,
            race,
            vaccinated,
            castrated,
            description,
            zipcode,
            age,
            sex,
            size

        })
        console.log(name, vaccinated, race, castrated, description, zipcode, age, sex, size)
    }
    return (
        <section className="card-cadastre">
            <div className='box-title'>
                <p>CADASTRO</p>
            </div>

            <form onSubmit={toRegister}>
                <div className='card-register'>
                    <div className='container'>
                        <div>
                            <Banner />
                            <div className='information-desktop'>
                                <BoxText
                                    obrigatorio={true}
                                    label="Nome"
                                    valor={name}
                                    aoAlterado={(valor) => setName(valor)}
                                />
                                <BoxText
                                    obrigatorio={true}
                                    label="Raça"
                                    valor={race}
                                    aoAlterado={(valor) => setRace(valor)}
                                />
                                <ListSuspended
                                    label="Vacinado"
                                    itens={props.nameChoice}
                                    valor={vaccinated}
                                    aoAlterado={(valor) => setVaccinated(valor)}
                                />
                                <ListSuspendedCastrated
                                    label="Castrado"
                                    itens={props.nameChoice}
                                    valor={castrated}
                                    aoAlterado={(valor) => setCastrated(valor)}
                                />
                            </div>
                        </div>
                        <div className='information-mobile'>
                            <BoxText
                                obrigatorio={true}
                                label="Nome"
                                valor={name}
                                aoAlterado={(valor) => setName(valor)}
                            />
                            <BoxText
                                obrigatorio={true}
                                label="Raça"
                                valor={race}
                                aoAlterado={(valor) => setRace(valor)}
                            />
                            <BoxTextInfo
                                obrigatorio={true}
                                label="Idade"
                                valor={age}
                                aoAlterado={(valor) => setAge(valor)}
                            />
                            <ListSuspended
                                label="Vacinado"
                                itens={props.nameChoice}
                                valor={vaccinated}
                                aoAlterado={(valor) => setVaccinated(valor)}
                            />
                            <ListSuspendedCastrated
                                label="Castrado"
                                itens={props.nameChoice}
                                valor={castrated}
                                aoAlterado={(valor) => setCastrated(valor)}
                            />
                        </div>
                        <div className='description'>
                            <div className='description-desktop'>
                                <BoxDescription
                                    obrigatorio={true}
                                    label="Descrição"
                                    valor={description}
                                    aoAlterado={(valor) => setDescription(valor)}
                                />
                            </div>
                            <div className='info-desktop'>
                                <BoxTextInfo
                                    obrigatorio={true}
                                    label="Idade"
                                    valor={age}
                                    aoAlterado={(valor) => setAge(valor)}
                                />
                                <ListSuspendedSex
                                    label="Sexo"
                                    itens={props.nameSex}
                                    valor={sex}
                                    aoAlterado={(valor) => setSex(valor)}
                                />
                                <ListSuspendedSize
                                    label="Porte"
                                    itens={props.nameSize}
                                    valor={size}
                                    aoAlterado={(valor) => setSize(valor)}
                                />
                            </div>
                            <div className='info-mobile'>
                                <ListSuspendedSize
                                    label="Porte"
                                    itens={props.nameSize}
                                    valor={size}
                                    aoAlterado={(valor) => setSize(valor)}
                                />
                                <ListSuspendedSex
                                    label="Sexo"
                                    itens={props.nameSex}
                                    valor={sex}
                                    aoAlterado={(valor) => setSex(valor)}
                                />
                            </div>
                            <div className='staff-desktop'>
                                <BoxText
                                    obrigatorio={true}
                                    label="Cep"
                                    valor={zipcode}
                                    aoAlterado={(valor) => setZipcode(valor)}
                                />
                                <BoxText
                                    obrigatorio={true}
                                    label="E-mail"
                                    valor={email}
                                    aoAlterado={(valor) => setEmail(valor)}
                                />
                                <BoxText
                                    obrigatorio={true}
                                    label="Telefone"
                                    valor={telephone}
                                    aoAlterado={(valor) => setTelephone(valor)}
                                />
                            </div>
                            <div className='staff-mobile'>
                                <BoxText
                                    obrigatorio={true}
                                    label="E-mail"
                                    valor={email}
                                    aoAlterado={(valor) => setEmail(valor)}
                                />
                                <BoxText
                                    obrigatorio={true}
                                    label="Telefone"
                                    valor={telephone}
                                    aoAlterado={(valor) => setTelephone(valor)}
                                />
                                <BoxText
                                    obrigatorio={true}
                                    label="Cep"
                                    valor={zipcode}
                                    aoAlterado={(valor) => setZipcode(valor)}
                                />
                            </div>
                            <div className='description-mobile'>
                                <BoxDescription
                                    obrigatorio={true}
                                    label="Descrição"
                                    valor={description}
                                    aoAlterado={(valor) => setDescription(valor)}
                                />
                            </div>
                        </div>
                        <div className='button-register-desktop'>
                            <div className='button-registe'>
                                <Button>CADASTRAR</Button>
                            </div>
                            <div className='button-delete'>
                                <Button corFundo='#5A3938'>EXCLUIR</Button>
                            </div>
                        </div>

                    </div>

                    <div className='button-register-mobile'>
                        <div className='button-register'>
                            <Button>CADASTRAR</Button>
                        </div>
                        <div className='button-delete'>
                            <Button corFundo='#5A3938'>EXCLUIR</Button>
                        </div>
                    </div>
                </div>
            </form>

        </section>
    );
};
export default CardRegister;

