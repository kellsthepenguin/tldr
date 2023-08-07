import { useRef } from 'react'

export default function Home() {
  const textarea = useRef<HTMLTextAreaElement>(null)
  const tldr = async (message: string) => {
    const data = await (
      await fetch('/api/tldr', { body: JSON.stringify({ message }) })
    ).json()

    return data.output
  }

  const handleClick = async () => {
    textarea.current!.value = await tldr(textarea.current!.value)
  }

  return (
    <div className='text-center my-16'>
      <p className='text-9xl font-semibold'>tl;dr</p>
      <p>
        Too Long; Didn't Read. 글의 내용이 너무 길어 읽지 않았을 때 쓰임.
      </p>{' '}
      <br />
      <textarea
        ref={textarea}
        className='outline resize-none w-[600px] h-[350px] outline-gray-300'
      />{' '}
      <br />
      <button
        className='px-3 py-2 bg-blue-600 rounded-md text-white'
        onClick={handleClick}
      >
        TL;DR
      </button>
    </div>
  )
}
