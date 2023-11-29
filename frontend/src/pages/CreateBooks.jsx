import React, { useState, useEffect } from 'react'
import BackButton from '../components/backButton'
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";

const CreateBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar()
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .post("https://book-store-project-backend.vercel.app/books", data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar(`Book Created Successfully`, {
                    varient: "success",
                });
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                // alert('an error happened. please check conosle');
                enqueueSnackbar(`Error`, { varient: "error" });
                console.log(error);
            });
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 borcer-sly-400 rounded-xl w-[600]px p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">PublishYear</label>
                    <input
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                    Save
                </button>
            </div>

        </div>
    )
}

export default CreateBooks
