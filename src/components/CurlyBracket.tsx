const CurlyBracket = ({ sideHeight = 50 }) => {
  return (
    <svg className='block rotate-180' width='13px' height={`${sideHeight + 38}px`}>
      <path
        fill='none'
        stroke='black'
        strokeWidth='1.5px'
        d={`
            M 13 1
            a 8 8 0 0 0 -8 8
            v ${sideHeight / 2}
            a 5 10 0 0 1 -5 10
            a 5 10 0 0 1 5 10
            v ${sideHeight / 2}
            a 8 8 0 0 0 8 8
          `}
      />
    </svg>
  );
};

export default CurlyBracket;
