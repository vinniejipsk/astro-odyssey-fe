export const textFieldStyles = {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& input': {
        color: 'white',
      },
      '& textarea': {
        color: 'white',
      },
      '& .MuiSelect-select': {
        color: 'white',
        '&.Mui-focused': {
          color: 'white',
        }
      },
      '&.Mui-disabled': {
        '& fieldset': {
          borderColor: 'gray',
        },
        '& input, & textarea, & .MuiSelect-select': {
          color: 'gray',
        },
      },
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-disabled': {
      color: 'gray',
    },
  };