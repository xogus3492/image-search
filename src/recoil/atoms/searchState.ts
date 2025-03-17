import { atom } from 'recoil'

export const searchState = atom<string>({
    key: 'searchValue',
    default: 'Korea',
})