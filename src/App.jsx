import React, { useState } from 'react'

const App = () => {
    const [prompt, setPrompt] = useState('')
    const [savePrompt, setSavePrompt] = useState([{ role: 'user', userPrompt: 'i am promt' }, { role: 'model', userPrompt: 'i am promt response' }, { role: 'user', userPrompt: 'i am promt' }, { role: 'user', userPrompt: 'i am promt' }, { role: 'model', userPrompt: 'i am promt response' }, { role: 'user', userPrompt: 'i am promt' }, { role: 'user', userPrompt: 'i am promt' }, { role: 'model', userPrompt: 'i am promt response' }, { role: 'user', userPrompt: 'i am promt' }, { role: 'user', userPrompt: 'i am promt' }, { role: 'model', userPrompt: 'i am promt response' }, { role: 'user', userPrompt: 'i am promt' }])

    const formHandle = (e) => {
        e.preventDefault()
        // const save = [...savePrompt, { role: 'model', userPrompt: prompt.trim() }]
        // setSavePrompt(save)

    }

    return (
        <>

            <div className='flex flex-col justify-between w-screen h-screen  bg-gray-900 text-white fixed'>
                <div className='bg-gray-800/40 p-5 shadow-md border-b border-gray-800'>
                    <span className='bg-blue-500 py-1.5 px-2.5  rounded-full text-sm font-bold'>G</span>
                    <span className='mx-2 font-semibold text-blue-400 text-lg'>.T Chatbot</span>
                </div>
                <div className='overflow-auto scrollbar-custom p-5 flex flex-col justify-start gap-4'>
                    {savePrompt.map((element, idx) => {
                        return (<>
                            <div className={`flex flex-row ${element.role === 'user' ? 'justify-end' : 'hidden'} `}>
                                <div className={`flex flex-row justify-end items-end gap-2`}>
                                    <span className='s bg-blue-700 text-md rounded-t-lg rounded-l-lg py-1.5 px-2'>sdf</span>
                                    <span className='bg-blue-500 py-1.5 px-2.5  rounded-full text-sm font-bold'>fd</span>
                                </div>
                            </div>

                            <div className={`flex flex-row ${element.role === 'model' ? 'justify-start' : 'hidden'} `}>
                                <div className={`flex flex-row justify-end items-end gap-2`}>
                                    <span className='bg-blue-500 py-1.5 px-2.5  rounded-full text-sm font-bold'>G</span>
                                    <span className=' border rounded-t-lg rounded-r-lg py-1.5 px-2'>sdf</span>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
                <div className="border-t border-gray-800 p-5 bg-gray-950/10">
                    <form onSubmit={formHandle} action="" className='flex flex-row justify-center gap-2' >
                        <input value={prompt} onChange={(e) => { setPrompt(e.target.value) }} placeholder='Ask me anything...' type="text" className='text-gray-300 rounded-xl w-120 bg-gray-800 text-sm px-4 focus:outline-none' />
                        <button className='bg-blue-600 active:bg-blue-800 text- py-2 px-4 rounded-xl'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App