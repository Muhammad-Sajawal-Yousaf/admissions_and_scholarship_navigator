import React from 'react'

const Chat = () => {
  return (
    <>
    <div className="fixed bottom-12 right-12">
  {/* <!-- nav - start --> */}
  <nav className="sticky bottom-0 mx-auto w-full sm:max-w-md">
    <a href="#" className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-3xl bg-indigo-500 text-white shadow-lg transition duration-100 hover:bg-indigo-600 sm:-top-8 sm:h-16 sm:w-16">
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 2c0-1.104.896-2 2-2h16c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V2zm2 0v16h16V2H4zm2 4h12v2H6V6zm0 4h12v2H6v-2zm0 4h8v2H6v-2z" />
</svg>
    </a>
  </nav>
  {/* <!-- nav - end --> */}
</div>
    </>
  )
}

export default Chat
