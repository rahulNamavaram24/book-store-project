import React, { useState, useEffect } from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
    // const [book, setBook] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar
    useEffect(() => {
        // setLoading(true);
        axios
            .get(`https://book-store-project-backend.vercel.app/books/${id}`)
            .then((response) => {
                // setBook(response.data.book)
                setAuthor(response.data.book.author);
                setPublishYear(response.data.book.publishYear);
                setTitle(response.data.book.title);
                // console.log(response.data.book)
                // console.log(response.data.publishYear)
                // console.log(response.data.title)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                // alert("an error happened. Please check in console")
                enqueueSnackbar(`An error occured`);
                console.log(error);
            });
    }, [id])

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .put(
                `https://book-store-project-backend.vercel.app/books/${id}`,
                data
            )
            .then(() => {
                setLoading(false);
                // enqueueSnackbar(`Book edited successfully`,{varient:'success'})
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                // alert("an error happened. please check conosle");
                // enqueueSnackbar(`Error`,{varient:'error'})
                console.log(error);
            });
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Edit Book</h1>
            {loading ? <Spinner /> : ""}
            <div className="flex flex-col border-2 borcer-sly-400 rounded-xl w-[600]px p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500">PublishYear</label>
                    <input
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditBook;
