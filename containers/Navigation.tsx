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
      <Disclosure as="nav" className="bg-green-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">


                <div className="flex flex-1 items-center  sm:flex justify-between">
                  <div className="flex flex-shrink-0 items-center">

                    <a href="https://www.konbini.com/">
                      <img
                      className="h-8 w-auto"
                      src="https://i.pinimg.com/1200x/96/9f/51/969f511943511e2a4cb039767fbe35cd.jpg" alt="logo-kon"
                      />
                    </a>


                    <a href="https://www.jacquemus.com/">
                      <img className="logo-jacquemus" src="https://i.pinimg.com/736x/03/99/10/039910aa8a700233f1601e8d161b8ead.jpg" alt="logo-jac" width={40} height={40}  />
                    </a>


                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                <div className="flex justify-center">
                  <div>
                    <a href= '/'>
                      <h1>CoutureReborn</h1>
                    </a>
                  </div>
                </div>  


                  <div className=" flex justify-end absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-13 sm:pr-0">
                      <div>
                        <div>
                          <a href="panier.html">
                            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/54/54524.png" alt="logo" width={20} height={20} />
                          </a>
                        </div>
                      </div>
                  </div>
                </div> 
              </div>

          </>
        )}
      </Disclosure>
  );
}

export default Navigation;