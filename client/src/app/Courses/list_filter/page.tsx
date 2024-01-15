'use client'

import { useState } from 'react';
import {
    Faders, Star, ArrowLeft, User, ArrowRight, MagnifyingGlass, Cpu, Handshake, CreditCard,
    ChartBarHorizontal, BugDroid, PenNib, Megaphone, Package, Camera, Headset, FirstAidKit,
    CaretDown, CaretUp, Receipt
} from "@phosphor-icons/react/dist/ssr";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Curso from '../../components/Curso3';
import Input from '../../components/Input';
import { Slider } from "@nextui-org/react";


export default function Courses_List_Filter() {

    const [categoriasVisible, setCategoriasVisible] = useState(true);
    const [ferramentasVisible, setFerramentasVisible] = useState(true);
    const [classificacaoVisible, setClassificacaoVisible] = useState(true);
    const [nivelVisible, setNivelVisible] = useState(true);
    const [precoVisible, setPrecoVisible] = useState(true);
    const [duracaoVisible, setDuracaoVisible] = useState(true);

    const classificacoes = [
        { id: 0, name: '5 estrelas', isChecked: false, students: 20 },
        { id: 1, name: '4 estrelas ou mais', isChecked: false, students: 10 },
        { id: 2, name: '3 estrelas ou mais', isChecked: false, students: 15 },
        { id: 3, name: '2 estrelas ou mais', isChecked: false, students: 20 },
        { id: 4, name: '1 estrela ou mais', isChecked: true, students: 45 },
    ];

    const niveis = [
        { id: 0, name: 'Todos os níveis', isChecked: true, students: 200 },
        { id: 1, name: 'Iniciante', isChecked: false, students: 100 },
        { id: 2, name: 'Intermediário', isChecked: false, students: 750 },
        { id: 3, name: 'Avançado', isChecked: false, students: 25 },
    ];

    const precos = [
        { id: 0, name: 'Pago', isChecked: false, students: 200 },
        { id: 1, name: 'Grátis', isChecked: false, students: 100 },
    ];

    const duracoes = [
        { id: 0, name: '6-12 meses', isChecked: false, students: 200 },
        { id: 1, name: '3-6 meses', isChecked: false, students: 100 },
        { id: 2, name: '1-3 meses', isChecked: false, students: 750 },
        { id: 3, name: '1-4 semanas', isChecked: false, students: 25 },
        { id: 4, name: '1-7 dias', isChecked: false, students: 25 },
    ];

    const handleToggle = (id) => {
        setComponentStates((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const handleToggleNiveis = (id) => {
        setNivelStates((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const handleToggleDuracoes = (id) => {
        setDuracaoStates((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const handleTogglePrecos = (id) => {
        setPrecosStates((prevStates) => {
            const newStates = prevStates.map((state) => ({
                ...state,
                isChecked: state.id === id,
            }));
            return newStates;
        });
    };

    const [componentStates, setComponentStates] = useState(classificacoes);
    const [niveisStates, setNivelStates] = useState(niveis);
    const [duracoesStates, setDuracaoStates] = useState(duracoes);
    const [precosStates, setPrecosStates] = useState(precos);

    const toggleCategorias = () => {
        setCategoriasVisible(!categoriasVisible);
    };

    const toggleFerramentas = () => {
        setFerramentasVisible(!ferramentasVisible);
    };

    const toggleClassificacao = () => {
        setClassificacaoVisible(!classificacaoVisible);
    };

    const toggleNivel = () => {
        setNivelVisible(!nivelVisible);
    };

    const togglePreco = () => {
        setPrecoVisible(!precoVisible);
    };

    const toggleDuracao = () => {
        setDuracaoVisible(!duracaoVisible);
    };


    return (


        <div>

            <Header avatarUrl='none'></Header>

            <div className="bg-white justify-center">

                <div className="flex flex-col w-full justify-center items-center">

                    <div className="flex w-3/4 justify-between mt-5">

                        <div className="flex w-1/2">
                            <div className="p-2 border border-orange-600 w-1/4 m-1 flex justify-between items-center mr-3">
                                <Faders size={20} className="text-orange-600" />
                                <p className="text-xs font-bold ml-2 text-orange-600">Filtros</p>
                                <p className="bg-orange-600 p-1 text-white ml-2 text-xs">3</p>
                            </div>

                            <div className="flex w-3/4 m-1 border border-gray-200 p-2 items-center">
                                <MagnifyingGlass size={15} />
                                <input className="text-xs w-full outline-none" type="text" name="" id="" placeholder=" Procura nos cursos..." />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <p className="text-gray-600 text-xs mr-2">Ordenar por:</p>
                            <select className="flex text-xs text-gray-500 mt-1 border border-gray-200 p-2 justify-center items-center" name="" id="">
                                <option className="text-xs text-gray-500 p-2" value="">Cursos Terminados</option>
                                <option className="text-xs text-gray-500 p-2" value="">Cursos em progresso</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex justify-end w-3/4 border-b pb-2 pt-2 border-grey-100 ">
                        <p className="text-xs text-gray-900 font-bold mr-1">1,234,567 resultados encontrados </p>
                        <p className="text-xs text-gray-500">"ui/ux design"</p>
                    </div>

                </div>

                <div className="flex justify-center">

                    <div className="flex justify-center w-3/4">

                        <div className="w-1/4 mt-7 mr-3">

                            <div className="border border-gray-100">

                                <div className="flex justify-between items-center p-2" onClick={toggleCategorias} >
                                    <p>Categorias</p>
                                    {categoriasVisible ? <CaretUp size={20} /> : <CaretDown size={20} />}
                                </div>

                                {categoriasVisible && (

                                    <div id="categorias">

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Cpu size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Desenvolvimento</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Handshake size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Negócios</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <CreditCard size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Contabilidade e Finanças</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <ChartBarHorizontal size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">IT & Software</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <BugDroid size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Produtividade do escritório</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Receipt size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Desenvolvimento Pessoal</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <PenNib size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Design</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Megaphone size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Marketing</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Package size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Estilo de Vida</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Camera size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Fotografia e Vídeo</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <Headset size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Música</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center p-2 border-t" style={{ cursor: 'pointer' }}>
                                            <div className="flex items-center">
                                                <FirstAidKit size={20} className="text-gray-500" />
                                                <p className="text-xs text-gray-500 ml-2">Saúde</p>
                                            </div>
                                        </div>

                                    </div>
                                )}

                            </div>

                            <div className="border border-gray-100 mt-5">

                                <div className="flex justify-between items-center p-2" onClick={toggleClassificacao} >
                                    <p>Classificação</p>
                                    {classificacaoVisible ? <CaretUp size={20} /> : <CaretDown size={20} />}
                                </div>

                                {classificacaoVisible && (

                                    <div id="classificacao" className='p-2'>

                                        {componentStates.map(({ id, name, isChecked, students }) => (
                                            <div key={id} className='flex justify-between items-center mb-2'>
                                                <div className='flex'>
                                                    <Input id={id} name={name} isChecked={isChecked} onToggle={handleToggle} />
                                                    <Star size={15} color="#FD8E1F" weight="fill" />
                                                    <p className='text-xs text-gray-700 ml-2'>{name}</p>
                                                </div>
                                                <p className='text-xs text-gray-500'>{students}</p>
                                            </div>
                                        ))}

                                    </div>
                                )}

                            </div>

                            <div className="border border-gray-100 mt-5">

                                <div className="flex justify-between items-center p-2" onClick={toggleNivel} >
                                    <p>Nível do curso</p>
                                    {nivelVisible ? <CaretUp size={20} /> : <CaretDown size={20} />}
                                </div>

                                {nivelVisible && (

                                    <div id="nivel" className='p-2'>

                                        {niveisStates.map(({ id, name, isChecked, students }) => (
                                            <div key={id} className='flex justify-between items-center mb-2'>
                                                <div className='flex'>
                                                    <Input id={id} name={name} isChecked={isChecked} onToggle={handleToggleNiveis} />
                                                    <p className='text-xs text-gray-700 ml-2'>{name}</p>
                                                </div>
                                                <p className='text-xs text-gray-500'>{students}</p>
                                            </div>
                                        ))}

                                    </div>
                                )}


                            </div>



                            <div className="border border-gray-100 mt-5">

                                <div className="flex justify-between items-center p-2" onClick={togglePreco} >
                                    <p>Preço</p>
                                    {precoVisible ? <CaretUp size={20} /> : <CaretDown size={20} />}
                                </div>

                                {precoVisible && (

                                    <div id="preco" className='p-2'>

                                        {precosStates.map(({ id, name, isChecked, students }) => (
                                            <div key={id} className='flex justify-between items-center mb-2'>
                                                <div className='flex'>
                                                    <Input id={id} name={name} isChecked={isChecked} onToggle={handleTogglePrecos} />
                                                    <p className='text-xs text-gray-700 ml-2'>{name}</p>
                                                </div>
                                                <p className='text-xs text-gray-500'>{students}</p>
                                            </div>
                                        ))}

                                    </div>
                                )}


                            </div>


                            <div className="border border-gray-100 mt-5">

                                <div className="flex justify-between items-center p-2" onClick={toggleDuracao} >
                                    <p>Duração</p>
                                    {duracaoVisible ? <CaretUp size={20} /> : <CaretDown size={20} />}
                                </div>

                                {duracaoVisible && (

                                    <div id="duracao" className='p-2'>

                                        {duracoesStates.map(({ id, name, isChecked, students }) => (
                                            <div key={id} className='flex justify-between items-center mb-2'>
                                                <div className='flex'>
                                                    <Input id={id} name={name} isChecked={isChecked} onToggle={handleToggleDuracoes} />
                                                    <p className='text-xs text-gray-700 ml-2'>{name}</p>
                                                </div>
                                                <p className='text-xs text-gray-500'>{students}</p>
                                            </div>
                                        ))}

                                    </div>
                                )}


                            </div>






                        </div>

                        <div className="flex flex-wrap mt-5 w-3/4">
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                            <Curso></Curso>
                        </div>

                    </div>

                </div>


                <div className="flex mt-10 pb-10 justify-center items-center">

                    <div className="bg-orange-100 rounded-full p-3 mr-5">
                        <ArrowLeft size={15} color="orange" />
                    </div>

                    <div className="text-xs bg-white-500 rounded-full p-3 mr-5">
                        <p>01</p>
                    </div>

                    <div className="text-xs bg-orange-500 text-white rounded-full p-3 mr-5">
                        <p>02</p>
                    </div>

                    <div className="text-xs bg-white-500 rounded-full p-3 mr-5">
                        <p>03</p>
                    </div>

                    <div className="text-xs bg-orange-100 text-orange-500 rounded-full p-3 mr-5">
                        <p>04</p>
                    </div>

                    <div className="text-xs bg-white-500 rounded-full p-3 mr-5">
                        <p>05</p>
                    </div>


                    <div className="bg-orange-100 rounded-full p-3">
                        <ArrowRight size={15} color="orange" />
                    </div>

                </div>

            </div>

            <Footer></Footer>

        </div>

    );
}
