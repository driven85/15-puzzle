const styles = {
  'xs': {
    content: {
      width: 300, 
      height: 300 
    },
    header: { 
      fontSize: 25, 
      marginBottom: 30 
    },
    main: { 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center'
    }
  },

  'sm': {
    content: { 
      width: 300, 
      height: 300 
    },
    header: { 
      fontSize: 25, 
      marginBottom: 30 
    }
  },

  'md': {
    content: { 
      width: 500, 
      height: 350 
    },
    select: {
      width: 200,
      height: 34,
      fontSize: '1.2rem'
    }
  },

  'lg': {
    content: { 
      width: 600, 
      height: 450 
    },
    select: {
      width: 250,
      height: 38,
      fontSize: '1.4rem'
    }
  }
}

export const getStyle = (layout, element) => {
  const breakpoints = ['xs', 'sm', 'md', 'lg']
  let style = {}

  for (const bp of breakpoints) {
    style = styles[bp][element] || style // TODO: .?
    if (bp === layout) break
  }

  return style
}

export default styles

