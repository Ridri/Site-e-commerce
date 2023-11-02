import Link from 'next/link';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navigation() {

  const navigation = [
    { name: 'Homme', href: '/men', current: false },
    { name: 'Femme', href: '/women', current: false },
    { name: 'Sacs', href: '/bags', current: false },
  ]
  return (
            <div className="nav-espace">

                <div className="flex flex-1 items-center  sm:flex justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex space-x-4"> 

                    <a href="https://www.konbini.com/">
                      <img
                      className="h-8 w-auto"
                      src="https://i.pinimg.com/1200x/96/9f/51/969f511943511e2a4cb039767fbe35cd.jpg" alt="logo-kon"
                      />
                    </a>

                    <div className="flex space-x-20">
                    <a href="https://www.jacquemus.com/">
                      <img className="logo-jacquemus" src="https://i.pinimg.com/736x/03/99/10/039910aa8a700233f1601e8d161b8ead.jpg" alt="logo-jac" width={50} height={40}  />
                    </a>
                    
                    <div className="flex space-x-5">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'color-nav-hover bg-black-900 text-white' : 'color-nav hover:bg-white-700 hover:text-white',
                            'rounded-md px-10 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined} 
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                <div className="nav-titre">
                  <div>
                    <a href= '/'>
                      <h1>CoutureReborn</h1>
                    </a>
                  </div>
                </div>  
              <div>
            </div>
                  <div>
                    <a href="../panier">
                      <img className="logo" src="https://img.lovepik.com/element/40028/2189.png_860.png" alt="logo"/>
                    </a>
                  </div>
          </div> 
        </div>

  );
}

export default Navigation;