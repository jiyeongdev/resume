import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey =
  | 'blue'
  | 'gray'
  | 'global'
  | 'sign'
  | 'profileImg'
  | 'footerCover'
  | 'footer'
  | 'skillKeywordBadge'
  | 'highlightBadge'
  | 'lineUnderline';

export const Style: Record<TStyleKey, CSSProperties> = {
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },

  global: {
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },

  profileImg: {
    maxHeight: '320px',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },

  footer: {
    // paddingTop: '10px',
  },

  skillKeywordBadge: {
    fontWeight: 400,
  },

  highlightBadge: {
    fontWeight: 500,
    backgroundColor: '#4a90e2',
    color: 'white',
    fontSize: '0.9em',
  },

  lineUnderline: {
    textDecoration: 'underline',
    textUnderlinePosition: 'under',
    fontWeight: 500,
    fontSize: '1em',
  },
};
