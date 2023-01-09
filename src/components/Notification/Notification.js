import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Notification({
  badge = "NEW",
  text,
  type = "default",
}) {
  return (
    <Fade>
      <div className='flex w-screen justify-center items-center mt-2 absolute'>
        <div
          className='p-2 bg-black dark:bg-slate-700 items-center text-slate-100 leading-none rounded-full flex lg:inline-flex '
          role='alert'
        >
          <span
            className={
              "flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 " +
              type
            }
          >
            {badge}
          </span>
          <span className='font-semibold mr-2 text-left flex-auto'>{text}</span>
          <svg
            className='fill-current opacity-75 h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z' />
          </svg>
        </div>
      </div>
    </Fade>
  );
}
