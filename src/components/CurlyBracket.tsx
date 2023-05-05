const CurlyBracket = ({ sideHeight = 50 }) => {
  return (
    <svg
      className='block border border-yellow-600'
      width='50px'
      height='100vh'
    >
      <path
        fill='none'
        stroke='black'
        strokeWidth='2px'
        d={`
            M 45 10
            a 20 20 0 0 0 -20 20                                            
            v ${sideHeight/2}
            a 10 15 0 0 1 -10 10                 
            a 10 15 0 0 1 10 10                                                        
            v ${sideHeight/2}
            a 20 20 0 0 0 20 20                                 
          `}
      />
    </svg>
  );
};

export default CurlyBracket;
