"use client";

import Link from 'next/link'
import Image from 'next/image'

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function TopNavBar() {
    return (
        <div className="bg-[#3d3652ff] shadow-xl flex justify-evenly items-center h-20 w-screen " >
            <Link className='text-white font-body mx-10 md:text-3xl text-2xl' href="/"> DAVID THUMAN </Link>
            <InternalPages />
            <Example />
        </div>
    )
}

function InternalPages() {
    return (
        <div className='hidden lg:flex justify-evenly items-center'>
            <Link className='text-white font-body mx-4 text-xl' href="posts"> POSTS </Link>
            {/* <Link className='text-white font-body mx-4 md:text-2xl' href="media"> MEDIA </Link> */}
            <Link className='text-white font-body mx-4 text-xl' href="resume"> RESUME </Link>
            <Link className='text-white font-body mx-4 text-xl' href="about"> ABOUT </Link>
            <Link className='text-white font-body mx-4 text-xl' href="contact"> CONTACT </Link>
            <SocialImages />
        </div>
    )
}

function SocialImages() {
    return (
        <>
            <Link className='mx-4' href="https://www.linkedin.com/in/david-thuman/">
                <Image
                    src="/navbar/linkedinLogo"
                    alt="Link to David's LinkedIn"
                    width={40}
                    height={40}
                />
            </Link>
            <Link className='mx-4 invert' href="https://github.com/davidthuman">
                <Image
                    src="/navbar/GitHubLogo"
                    alt="Link to David's GitHub"
                    width={40}
                    height={40}
                />
            </Link>
        </>
    )
}


function Example() {
  return (
    <div className="top-16 w-56 text-right lg:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-10 px-4 py-2 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            EXPLORE
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                    <Link href="posts" passHref >
                        <button
                            className={`${
                            active ? 'bg-[#3d3652ff] text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                            POSTS
                        </button>
                    </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                    <Link href="resume">
                        <button
                            className={`${
                            active ? 'bg-[#3d3652ff] text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            RESUME
                        </button>
                    </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                    <Link href="about">
                        <button
                            className={`${
                            active ? 'bg-[#3d3652ff] text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            ABOUT
                        </button>
                    </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                    <Link href="contact">
                        <button
                            className={`${
                            active ? 'bg-[#3d3652ff] text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            CONTACT
                        </button>
                    </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


