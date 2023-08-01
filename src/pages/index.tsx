export default function Home() {
  return (
    <div className='text-center my-16'>
      <p className='text-9xl font-semibold'>tl;dr</p>
      <p>Too Long; Didn't Read. 글의 내용이 너무 길어 읽지 않았을 때 쓰임.</p> <br />
      <textarea className='outline resize-none w-[600px] h-[350px] outline-gray-300' /> <br />
      <button className='px-3 py-2 bg-blue-600 rounded-md text-white'>TL;DR</button>
    </div>
  )
}
