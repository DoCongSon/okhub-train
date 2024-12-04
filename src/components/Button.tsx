import Image from 'next/image'

type ButtonProps = {
  size?: 'L' | 'M' | 'S'
  status?: 'default' | 'white' | 'line-default' | 'line-white'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: () => void
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  let className = 'inline-flex items-center justify-center gap-6 rounded-[0.5rem] relative'
  if (props.size === 'L') {
    className += ' py-4 px-8'
  } else if (props.size === 'S') {
    className += ' py-[0.62rem] px-5'
  } else {
    className += ' py-3 px-6'
  }

  if (props.status === 'white') {
    className += ' bg-white border border-white text-[#361D00]'
  } else if (props.status === 'line-default') {
    className += ' bg-transparent border border-primary-70 text-primary-70'
  } else if (props.status === 'line-white') {
    className += ' bg-transparent border border-white text-white'
  } else {
    className += ' bg-primary-70 border border-primary-70 text-white'
  }

  return (
    <button className={className} onClick={props.onClick}>
      {(!props.status || props.status == 'default') && (
        <Image src='/images/bg-button.svg' width={100} height={50} alt='bg' className='w-full h-full top-0 absolute' />
      )}
      {props.iconLeft}
      <div className='z-10 font-poppins text-[0.8125rem] leading-tight font-bold flex items-center justify-center'>
        {props.children}
      </div>
      {props.iconRight}
    </button>
  )
}

export default Button
