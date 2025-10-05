import React from 'react';

const Footer = () => {
        return (
                <div className='bg-black p-10 flex justify-around items-center'>

                        <div className='text-white space-y-3 font-bold'>
                                <h3 className='text-xl'>SERVICES</h3>
                                <ul className='text-gray-300  font-light space-y-2'>
                                        <li><a href="">Branding</a></li>
                                        <li><a href="">Advertisement</a></li>
                                        <li><a href="">Design</a></li>
                                        <li><a href="">Development</a></li>
                                </ul>
                        </div>
                        <div className='text-white space-y-3 font-bold'>
                                <h3 className='text-2xl'>COMPANY</h3>
                                <ul className='text-gray-300  font-light space-y-2'>
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Contact</a></li>
                                        <li><a href="">Jobs</a></li>
                                        <li><a href="">Press Kit</a></li>
                                </ul>
                        </div>
                        <div className='text-white space-y-3 font-bold'>
                                <h3 className='text-2xl'>LEGAL</h3>
                                <ul className='text-gray-300  font-light space-y-2'>
                                        <li><a href="">Terms of use</a></li>
                                        <li><a href="">Privacy Policy</a></li>
                                        <li><a href="">Cookies Policy</a></li>
                                        
                                </ul>
                        </div>

                        
                        
                </div>
        );
};

export default Footer;