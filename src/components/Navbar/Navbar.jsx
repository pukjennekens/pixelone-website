import classnames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import Container from '../Container/Container';
import LinkButton from '../LinkButton/LinkButton';
import NavLink from '../NavLink/NavLink';
import NavLinkDropdown from '../NavLinkDropdown/NavLinkDropdown';
import logo from '../../public/img/logo.jpg';

const Navbar = ({ initialBgClass }) => {
    const navbarClasses = classnames('py-6', initialBgClass);

    const [servicesDropdownVisible, setServicesDropdownVisible] =
        useState(false);

    return (
        <nav className={navbarClasses}>
            <Container>
                <div className='bg-white px-4 py-4 rounded-lg flex flex-row items-center justify-between'>
                    <div className='h-8 w-36 relative'>
                        <Image
                            src={logo}
                            alt='Pixel One'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <NavLink path='/'>Home</NavLink>
                        <NavLink path='/over'>Over</NavLink>
                        <NavLink
                            path='/diensten'
                            sub={true}
                            onMouseOver={() => setServicesDropdownVisible(true)}
                            onMouseLeave={() =>
                                setServicesDropdownVisible(false)
                            }
                        >
                            Diensten
                        </NavLink>
                        <NavLink path='/nieuws'>Nieuws</NavLink>
                        <NavLink path='/contact'>Contact</NavLink>
                    </div>

                    <LinkButton href='/contact'>Contact</LinkButton>
                </div>
            </Container>

            <NavLinkDropdown
                setVisible={setServicesDropdownVisible}
                isVisible={servicesDropdownVisible}
            >
                <div className='absolute w-full'>
                    <Container>
                        <div className='bg-white px-4 py-4 rounded-lg grid grid-cols-4 gap-2 z-20'>
                            <div className='px-3 py-2'>
                                <h3 className='font-title text-blue-900 text-xl'>
                                    Titel
                                </h3>
                            </div>

                            <div className='px-3 py-2'>
                                <h3 className='font-title text-blue-900 text-xl'>
                                    Titel
                                </h3>
                            </div>

                            <div className='px-3 py-2'>
                                <h3 className='font-title text-blue-900 text-xl'>
                                    Titel
                                </h3>
                            </div>

                            <div className='px-3 py-2'>
                                <h3 className='font-title text-blue-900 text-xl'>
                                    Titel
                                </h3>
                            </div>
                        </div>
                    </Container>
                </div>
            </NavLinkDropdown>
        </nav>
    );
};

export default Navbar;
