module.exports = {
  // 기본 설정
  printWidth: 100, // 한 줄이 얼마나 길어질 수 있는지 (기본은 80자)
  tabWidth: 2, // 들여쓰기에 사용할 공백 수 (기본은 2)
  useTabs: false, // 탭 대신에 공백 사용 여부
  endOfLine: "auto", // 줄바꿈 문자 설정 (예: 'lf', 'crlf', 'cr', 'auto')

  // JavaScript/TypeScript 설정
  semi: true, // 세미콜론 자동 삽입 여부
  singleQuote: false, // 작은따옴표 사용 여부 (기본은 큰따옴표)
  quoteProps: "as-needed", // 객체의 속성에 따옴표 사용 여부
  bracketSpacing: true, // 객체 브라켓 사이에 공백 사용 여부
  arrowParens: "always", // 항상 화살표 함수의 매개변수에 괄호 사용 여부
  trailingComma: "es5", // 객체나 배열의 마지막 항목 후에 쉼표 사용 여부

  // JSX 설정
  jsxSingleQuote: false, // JSX에서 작은따옴표 사용 여부 (기본은 큰따옴표)
  jsxBracketSameLine: false, // 여러 줄의 JSX에서 마지막 >를 마지막 줄에 위치시키는지 여부

  // 파서 설정
  parser: "babel-ts", // 사용할 파서 (기본은 'babylon')
  filepath: "", // 변환할 파일의 경로

  // 범위 설정
  rangeStart: 0, // 포매팅을 시작할 위치
  rangeEnd: Infinity, // 포매팅을 끝낼 위치

  // 프라그마 설정
  requirePragma: false, // 파일 상단에 특정 주석이 있어야 포매팅을 수행할지 여부
  insertPragma: false, // 포매팅 후 파일 상단에 주석을 추가할지 여부

  // ProseWrap 설정
  proseWrap: "preserve", // 프로즈 랩 설정 ('always', 'never', 'preserve' 중 선택)

  // HTML 설정
  htmlWhitespaceSensitivity: "css", // HTML에서의 공백 감도 설정

  // 기타 설정
  embeddedLanguageFormatting: "auto", // 내장 언어 포매팅 적용 여부
};
