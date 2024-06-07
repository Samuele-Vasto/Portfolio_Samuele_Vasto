function NavLink ({name, id}){
    return(
        <a href={id} id="link" className='text-gray-400 hover:text-[#959697] transition-all ease-in duration-200 lg:text-neutral-100'>{name}</a>
    )
}

export default NavLink