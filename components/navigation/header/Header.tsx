import Image from 'next/image';
import { useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [tagPosition, setTagPosition] = useState<string>('');
  const handleClick = (tag: string) => {
    setTagPosition(tag);
  };
  return (
    <nav className="bg-app-whiteCinc app-container subtitle-1 text-app-red flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] ">
      <Image
        className="w-20 "
        src="/logoWhite.png"
        alt="evetn"
        width={600}
        height={600}
      />
      <ul className="flex gap-10">
        <li
          className="hover:text-black cursor-pointer"
          style={
            tagPosition === ''
              ? {
                  borderBottom: '4px solid black',
                  borderColor: '#d41e45',
                  color: 'black',
                }
              : { borderBottom: '0px solid black' }
          }
          onClick={() => handleClick('')}
        >
          Inicio
        </li>
        <div className="relative">
          <li
            className=" flex items-center gap-2 hover:text-black cursor-pointer"
            onMouseOver={toggleMenu}
            onMouseEnter={toggleMenu}
            style={
              tagPosition === '1'
                ? {
                    borderBottom: '4px solid black',
                    borderColor: '#d41e45',
                    color: 'black',
                  }
                : { borderBottom: '0px solid black' }
            }
            onClick={() => handleClick('1')}
          >
            Maquinas
            <i className="bx bxs-chevron-down"></i>
          </li>
          {isOpen && (
            <ul
              className="absolute top-10 left-0 z-10 bg-white border border-gray-200 py-2 rounded-md shadow-lg w-40"
              onMouseLeave={toggleMenu}
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Opción 3
              </li>
            </ul>
          )}
        </div>

        <li
          className="hover:text-black cursor-pointer"
          style={
            tagPosition === '2'
              ? {
                  borderBottom: '4px solid black',
                  borderColor: '#d41e45',
                  color: 'black',
                }
              : { borderBottom: '0px solid black' }
          }
          onClick={() => handleClick('2')}
        >
          Empresa
        </li>
        <li
          className="hover:text-black cursor-pointer"
          style={
            tagPosition === '3'
              ? {
                  borderBottom: '4px solid black',
                  borderColor: '#d41e45',
                  color: 'black',
                }
              : { borderBottom: '0px solid black' }
          }
          onClick={() => handleClick('3')}
        >
          Contacto
        </li>
      </ul>
    </nav>
  );
};

export default Header;
