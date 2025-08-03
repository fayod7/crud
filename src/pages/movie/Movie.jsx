import React, { useState } from 'react'

const Movie = () => {
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")
  const [data, setData] = useState([])
  const [editingItemId, setEditingItemId] = useState(null)
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(editingItemId) {
      const update = data.map(movie => movie.id = editingItemId ? {id: editingItemId, name, genre, rating} : movie)
      setData(update)
      setEditingItemId(null)
    }else{
      const movie = {
      id: Date.now(),
      name,
      rating,
      genre
    }
    setData([...data, movie])
    }
    setName("")
    setGenre("")
    setRating("")
  }
  const handleDelete = (id) =>{
    setData(data.filter(item => item.id !== id))
  }
  const handleUpdate = (movie) =>{
    setName(movie.name)
    setGenre(movie.genre)
    setRating(movie.rating)
    setEditingItemId(movie.id)
  }
  return (
    <section className='w-full bg-[#e7e5eb] py-[50px]'>
            <form onSubmit={handleSubmit} className='bg-white w-[400px] py-5 px-4 gap-4 flex flex-col rounded-[10px] shadow-2xs mx-auto'>
            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='name' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <input value={genre} onChange={(e)=> setGenre(e.target.value)}  placeholder='capital' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <input value={rating} onChange={(e)=> setRating(e.target.value)}  placeholder='population' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <button className='bg-slate-600 text-white text-[18px] px-[50px] py-[10px] mt-4 rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer inline' type='submit'>submit</button>
          </form>
          <div className="container grid grid-cols-4 mt-[50px] gap-3">
            {
              data?.map(movie => (
                  <div className='bg-white rounded-sm shadow-sm hover:cursor-pointer flex flex-col gap-2 py-4 px-2' key={movie.id}>
                      <h2>{movie.name}</h2>
                      <p>{movie.genre}</p>
                      <strong>{movie.rating}</strong>
                               <div className='flex items-center gap-1'>

                  <button onClick={() => handleDelete(movie.id)} className='bg-slate-600 text-white text-[18px] px-[16px] py-[8px] rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer'>delete</button>
                  <button onClick={() => handleUpdate(movie)} className='bg-slate-600 text-white text-[18px] px-[16px] py-[8px] rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer'>update</button>
                  </div>
                  </div>
              ))
            }
          </div>
    </section>
  )
}

export default Movie