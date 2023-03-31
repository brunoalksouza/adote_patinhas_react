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

    const toRegister = (event) => {
        event.preventDefault()
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
                                    mandatory={true}
                                    label="Nome"
                                    value={name}
                                    aoAlterado={(value) => setName(value)}
                                />
                                <BoxText
                                    mandatory={true}
                                    label="Raça"
                                    value={race}
                                    aoAlterado={(value) => setRace(value)}
                                />
                                <ListSuspended
                                    label="Vacinado"
                                    itens={props.nameChoice}
                                    value={vaccinated}
                                    aoAlterado={(value) => setVaccinated(value)}
                                />
                                <ListSuspendedCastrated
                                    label="Castrado"
                                    itens={props.nameChoice}
                                    value={castrated}
                                    aoAlterado={(value) => setCastrated(value)}
                                />
                            </div>
                        </div>
                        <div className='information-mobile'>
                            <BoxText
                                mandatory={true}
                                label="Nome"
                                value={name}
                                aoAlterado={(value) => setName(value)}
                            />
                            <BoxText
                                mandatory={true}
                                label="Raça"
                                value={race}
                                aoAlterado={(value) => setRace(value)}
                            />
                            <BoxTextInfo
                                mandatory={true}
                                label="Idade"
                                value={age}
                                aoAlterado={(value) => setAge(value)}
                            />
                            <ListSuspended
                                label="Vacinado"
                                itens={props.nameChoice}
                                value={vaccinated}
                                aoAlterado={(value) => setVaccinated(value)}
                            />
                            <ListSuspendedCastrated
                                label="Castrado"
                                itens={props.nameChoice}
                                value={castrated}
                                aoAlterado={(value) => setCastrated(value)}
                            />
                        </div>
                        <div className='description'>
                            <div className='description-desktop'>
                                <BoxDescription
                                    mandatory={true}
                                    label="Descrição"
                                    value={description}
                                    aoAlterado={(value) => setDescription(value)}
                                />
                            </div>
                            <div className='info-desktop'>
                                <BoxTextInfo
                                    mandatory={true}
                                    label="Idade"
                                    value={age}
                                    aoAlterado={(value) => setAge(value)}
                                />
                                <ListSuspendedSex
                                    label="Sexo"
                                    itens={props.nameSex}
                                    value={sex}
                                    aoAlterado={(value) => setSex(value)}
                                />
                                <ListSuspendedSize
                                    label="Porte"
                                    itens={props.nameSize}
                                    value={size}
                                    aoAlterado={(value) => setSize(value)}
                                />
                            </div>
                            <div className='info-mobile'>
                                <ListSuspendedSize
                                    label="Porte"
                                    itens={props.nameSize}
                                    value={size}
                                    aoAlterado={(value) => setSize(value)}
                                />
                                <ListSuspendedSex
                                    label="Sexo"
                                    itens={props.nameSex}
                                    value={sex}
                                    aoAlterado={(value) => setSex(value)}
                                />
                            </div>
                            <div className='staff-desktop'>
                                <BoxText
                                    mandatory={true}
                                    label="Cep"
                                    value={zipcode}
                                    aoAlterado={(value) => setZipcode(value)}
                                />
                                <BoxText
                                    mandatory={true}
                                    label="E-mail"
                                    value={email}
                                    aoAlterado={(value) => setEmail(value)}
                                />
                                <BoxText
                                    mandatory={true}
                                    label="Telefone"
                                    value={telephone}
                                    aoAlterado={(value) => setTelephone(value)}
                                />
                            </div>
                            <div className='staff-mobile'>
                                <BoxText
                                    mandatory={true}
                                    label="E-mail"
                                    value={email}
                                    aoAlterado={(value) => setEmail(value)}
                                />
                                <BoxText
                                    mandatory={true}
                                    label="Telefone"
                                    value={telephone}
                                    aoAlterado={(value) => setTelephone(value)}
                                />
                                <BoxText
                                    mandatory={true}
                                    label="Cep"
                                    value={zipcode}
                                    aoAlterado={(value) => setZipcode(value)}
                                />
                            </div>
                            <div className='description-mobile'>
                                <BoxDescription
                                    mandatory={true}
                                    label="Descrição"
                                    value={description}
                                    aoAlterado={(value) => setDescription(value)}
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

