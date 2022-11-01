import { ComponentStyleConfig, extendTheme, ThemeOverride, withDefaultColorScheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

const Heading: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: ({ colorMode }) => ({
    color: colorMode === 'light' ? 'primary.light' : 'primary.dark',
    margin: 0
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: '2xl',
    variant: ''
  }
}
const Text: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    margin: 0,
    fontSize: 'xl'
  },
  // styles for different sizes ("sm", "md", "lg")
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    fontSize: '',
    variant: ''
  }
}
const Button: ComponentStyleConfig = {
  sizes: {
    sm: { h: '6', fontSize: 'md', px: '4' },
    md: { h: '10', fontSize: 'lg', px: '6' },
    lg: { h: '14', fontSize: 'xl', px: '8' },
    xl: {
      h: '18',
      fontSize: '2xl',
      px: '12'
    }
  },
  defaultProps: {
    size: 'md'
  }
}
const Link: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    margin: 0,
    textDecoration: 'inherit',
    _hover: {
      textDecoration: 'none'
    }
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: ['.5rem', '.75rem']
    },
    md: {
      fontSize: ['1.125rem', '1.125rem'],
      fontWeight: 'normal'
    },
    lg: {
      fontSize: ['1.25rem', '1.5rem'],
      fontWeight: 'semibold'
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    line: {
      textDecoration: 'underline'
    }
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: ''
  }
}
const Input: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline'
  },
  variants: {
    outline: {
      field: {
        borderWidth: '1px',
        borderColor: 'primary.light',
        _focus: {
          zIndex: 1,
          borderColor: '#4e988a',
          boxShadow: '0 0 0 1px #4e988a'
        },
        _readOnly: {
          borderColor: 'primary.200',
          opacity: 0.8
        },
        _disabled: {
          borderColor: 'primary.200',
          opacity: 0.8
        }
      }
    }
  }
}
const NumberInput: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline'
  },
  variants: {
    outline: {
      field: {
        borderWidth: '1px',
        borderColor: 'primary.light',
        _focus: {
          zIndex: 1,
          borderColor: '#4e988a',
          boxShadow: '0 0 0 1px #4e988a'
        },
        _readOnly: {
          borderColor: 'primary.200',
          opacity: 0.8
        },
        _disabled: {
          borderColor: 'primary.200',
          opacity: 0.8
        }
      }
    }
  }
}
const Textarea: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline'
  },
  variants: {
    outline: {
      borderWidth: '1px',
      borderColor: 'primary.light',
      _focus: {
        zIndex: 1,
        borderColor: '#4e988a',
        boxShadow: '0 0 0 1px #4e988a'
      },
      _disabled: {
        borderColor: 'primary.200',
        opacity: 0.8
      }
    }
  }
}
const Select: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline'
  },
  variants: {
    outline: {
      field: {
        borderWidth: '1px',
        borderColor: 'primary.light',
        _focus: {
          zIndex: 1,
          borderColor: '#4e988a',
          boxShadow: '0 0 0 1px #4e988a'
        },
        _disabled: {
          borderColor: 'primary.200',
          opacity: 0.8
        }
      }
    }
  }
}
const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536'
})

const overrides: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: `'Amiko', sans-serif`,
    body: `'Open Sans', sans-serif`
  },
  colors: {
    primary: {
      50: '#e1f9f7',
      100: '#c5e7e1',
      200: '#a8d5cc',
      300: '#87c3b8',
      400: '#67b1a4',
      500: '#4e988a',
      600: '#3a766c',
      700: '#27554d',
      800: '#12342e',
      900: '#00140e',
      light: '#4e988a',
      dark: '#87c3b8'
    },
    'bg-light': {
      light: '#d1d6d6fb',
      dark: '#212121'
    },
    bg: {
      light: '#f3f8f7',
      dark: '#16171a'
    }
  },
  breakpoints,
  styles: {
    global: (props) => ({
      'html, body': {
        m: 0,
        minH: '100vh',
        h: '100vh',
        display: 'grid',
        gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
        color: mode('#16171a', '#f3f8f7')(props),
        bg: mode('#f3f8f7', '#16171a')(props)
      }
    })
  },
  components: {
    Button,
    Text,
    Heading,
    Link,
    Input,
    NumberInput,
    Select,
    Textarea
  }
}

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'primary'
  })
)
export default theme
