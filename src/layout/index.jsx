
const Layout = ({ header, content, footer }) => {
  return (
    <div id="layout" className='w-full min-h-[100vh] bg-base'>
      <div id="header" className='flex h-20 w-full '> {header}</div>
      <div id="content" className=' border-b-black' >{content}</div>
      <div id="footer bg-slate-200 border-b-black">{footer}</div>
    </div>
  )
}

export default Layout
