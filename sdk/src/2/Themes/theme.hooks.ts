import { ThemeOptions } from './theme.type';
import {defaultTheme} from './default.theme';
import deepmerge from 'deepmerge';
import { useMemo } from 'react';
import { createTheme } from '@mui/material';
import {ThemeOptions as MuiThemeOptions} from '@mui/material'


export const useFinalTheme = (theme: ThemeOptions): ThemeOptions & MuiThemeOptions  => {
  return useMemo(() => {
    const muiTheme = createTheme()
    return deepmerge.all([muiTheme, defaultTheme, theme])
  }, [theme])
}
