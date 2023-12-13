
import { useState, useEffect } from "react";
import { db } from "/src/pages/api/firebase"; // adjust the path as needed
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

export default function CommentComponent({ sectionID }) {
  console.log('Received sectionID:', sectionID);
    const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch comments from Firestore
  useEffect(() => {
    const q = query(
      collection(db, `sections/${sectionID}/comments`),
       orderBy("timestamp", "desc")
       );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return () => {
      unsubscribe();
    };
  }, [sectionID]);

  const addComment = async () => {
    if (sectionID){
    try {
      const docRef = await addDoc(collection(db, `sections/${sectionID}/comments`), {
        name,
        comment,
        timestamp: new Date()
      });
      setName("");
      setComment("");
    } catch (e) {
      console.error("Error adding comment: ", e);
    }
  }
  };

  return (
    <div>
      {/* <h1>Comments</h1> */}

      <div className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full bg-transparent rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Your name"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block mt-2 w-full bg-transparent rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Your comment"
        ></textarea>
        <button
          onClick={addComment}
          className="rounded-full mt-2 bg-blue-600 py-1 px-3 text-white hover:bg-blue-500 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-1 dark:ring-inset dark:ring-blue-400/20 dark:hover:bg-blue-400/10 dark:hover:text-blue-300 dark:hover:ring-blue-300"
        >
          Comment
        </button>
      </div>

    <h3>Комментарии</h3>

      {comments.map((comment) => (
        <div className="border-b border-gray-200 dark:border-zinc-700  px-4 py-5 sm:px-6" key={comment.id}>
          <h3 className="text-base font-semibold leading-6text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">{comment.name}</h3>
          <p className="mt-1 mb-0 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white">{comment.comment}</p>
        </div>
      ))}
      
    </div>
  );
}
