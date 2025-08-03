import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      capital: "",
      population: "",
      area: "",
      data: [],
      editingItemId: null
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    const {editingItemId: id, data, name, capital, population, area} = this.state
    const updated = data.map(country => country.id === id ? {id, name,capital,population,area} : country)
    if(id){
      console.log("update");
      this.setState({data: updated, name:"", capital:"", population:"",area:"", editingItemId: null})
    }else{
      const country = {
        id: Date.now(),
        name: this.state.name,
        capital: this.state.capital,
        population: this.state.population,
        area: this.state.area,
      }
      this.setState({data: [...data, country],name:"", capital:"", population:"",area:""})
    }
    
  }
  handleDelete = (id) =>{
    this.setState({data: this.state.data.filter(item => item.id !==  id)})
  }
  handleUpdate = (country) =>{
    this.setState({name: country.name, capital: country.capital, population: country.population, area: country.area, editingItemId: country.id})
  }
  render() {
    const { name, capital, population, area , data } = this.state
    return (
      <section className='w-full bg-[#e7e5eb] py-[50px]'>
          <form onSubmit={this.handleSubmit} className='bg-white w-[400px] py-5 px-4 gap-4 flex flex-col rounded-[10px] shadow-2xs mx-auto'>
            <input value={name} onChange={(e)=> this.setState({name: e.target.value})} placeholder='name' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <input value={capital} onChange={(e)=> this.setState({capital: e.target.value})}  placeholder='capital' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <input value={population} onChange={(e)=> this.setState({population: e.target.value})}  placeholder='population' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <input value={area} onChange={(e)=> this.setState({area: e.target.value})}  placeholder='area' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' type="text" />
            <button className='bg-slate-600 text-white text-[18px] px-[50px] py-[10px] mt-4 rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer inline' type='submit'>submit</button>
          </form>
        <div className="container grid grid-cols-4 gap-3 mt-10">
         
            {
              data?.map(country => (
                <div className='bg-white rounded-sm shadow-sm hover:cursor-pointer flex flex-col gap-2 py-4 px-2' key={country.id}>
                  <h2 className='text-xl font-semibold text-gray-800 truncate'>{country.name}</h2>
                  <p className='text-sm text-gray-600'>{country.capital}</p>
                  <p>{country.population}</p>
                  <strong>{country.area}</strong>
                  <div className='flex items-center gap-1'>

                  <button onClick={() => this.handleDelete(country.id)} className='bg-slate-600 text-white text-[18px] px-[16px] py-[8px] rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer'>delete</button>
                  <button onClick={() => this.handleUpdate(country)} className='bg-slate-600 text-white text-[18px] px-[16px] py-[8px] rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer'>update</button>
                  </div>
                </div>
              ))
            }
          </div>
      </section>
    )
  }
}
