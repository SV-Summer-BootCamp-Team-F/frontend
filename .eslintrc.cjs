module.exports = {
  // ---- 언어 설정 ----
  // ESLint가 어떤 JavaScript 문법을 이해해야 하는지 설정합니다.
  parser: "@babel/eslint-parser", // Babel parser를 사용합니다. Babel은 최신 JavaScript 문법을 이해합니다.

  // Parser에게 추가적인 정보를 제공합니다.
  parserOptions: {
    ecmaVersion: 2020, // ECMAScript 2020 버전을 사용하겠다는 것을 명시합니다.
    sourceType: "module", // 코드가 ECMAScript 모듈에서 오는 것임을 명시합니다.
    ecmaFeatures: {
      jsx: true, // JSX 문법을 사용할 것임을 명시합니다. (React에서 주로 사용됩니다.)
    },
  },

  // ---- 실행 환경 설정 ----
  // 코드가 실행되는 환경에 따라 전역 변수를 설정합니다.
  env: {
    browser: true, // 코드가 브라우저에서 실행될 것임을 명시합니다. (window, document 등의 전역 변수를 사용 가능하게 합니다.)
    node: true, // 코드가 Node.js 환경에서 실행될 것임을 명시합니다. (process, Buffer 등의 전역 변수를 사용 가능하게 합니다.)
    es2020: true, // ES2020의 전역 변수와 타입을 사용 가능하게 합니다.
  },

  // ---- 플러그인 설정 ----
  // ESLint의 기능을 확장할 플러그인을 설정합니다.
  plugins: ["@babel"],

  // ---- 규칙 설정 ----
  // 코드에 적용할 규칙을 설정합니다. 각 규칙은 문자열 또는 배열로 설정할 수 있으며, 규칙의 심각도와 추가적인 옵션을 제어합니다.
  rules: {
    "semi": ["error", "always"], // 세미콜론을 항상 사용하도록 강제합니다. 이 규칙을 위반하면 에러를 반환합니다.
    "no-console": "warn", // 콘솔 사용을 경고합니다. 이 규칙을 위반하면 경고를 반환합니다.
    "quotes": ["error", "double"], // 큰 따옴표를 사용하도록 강제
    "no-console": "warn", // 콘솔 사용에 대한 경고
    "no-unused-vars": "error", // 사용하지 않는 변수에 대한 오류
    "no-irregular-whitespace": "error", // 비정상적인 공백에 대한 오류
    "no-mixed-spaces-and-tabs": "error", // 스페이스와 탭 혼합 사용에 대한 오류
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }], // 연속적인 여러 빈 줄에 대한 오류
    "prefer-const": "warn", // 가능하면 const를 사용하도록 경고
    "no-var": "error", // var 키워드 사용에 대한 오류
    "eqeqeq": ["error", "always"], // 항상 ===와 !==를 사용하도록 강제
    "indent": ["error", 2], // 강제로 2칸 들여쓰기를 사용
    "block-spacing": "error", // 중괄호 사이에 공백을 필요로 함
    "comma-dangle": ["error", "never"], // 객체나 배열의 마지막 항목 뒤에 콤마를 사용하지 않도록 강제
    "brace-style": ["error", "1tbs"], // 중괄호 스타일을 강제 (1tbs: One True Brace Style)
    "camelcase": ["error", {properties: "always"}], // 카멜 케이스를 강제
    "func-call-spacing": ["error", "never"], // 함수 이름과 괄호 사이에 공백을 두지 않도록 강제
    "key-spacing": ["error", { "afterColon": true }], // 객체 리터럴에서 키와 값 사이에 공백을 강제
    "no-trailing-spaces": "error", // 행 끝의 공백을 금지
    "object-curly-spacing": ["error", "always"], // 객체 리터럴의 중괄호 사이에 공백을 강제
    "spaced-comment": ["error", "always"], // 주석 앞에 공백을 강제
  },

  // ---- 설정 확장 ----
  // 다른 ESLint 설정을 확장하여 재사용합니다.
  extends: [], 

  // ---- Glob 패턴을 기반으로 한 설정 ----
  // Glob 패턴을 사용해 특정 파일에 대한 규칙을 재정의할 수 있습니다.
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript 파일에 대한 규칙을 적용합니다.
      parserOptions: {
        project: "./tsconfig.json", // TypeScript 프로젝트 설정 파일을 지정합니다.
      },
      rules: {
        // TypeScript 파일에 대한 추가 규칙을 설정할 수 있습니다.
      },
    },
  ],

  // ---- 무시할 패턴 설정 ----
  // ESLint가 무시해야 할 파일 또는 디렉토리를 설정합니다.
  ignorePatterns: ["dist/", "*.min.js"], // dist 디렉토리와 모든 .min.js 파일은 ESLint에서 무시됩니다.

  // ---- 공유 설정 추가 ----
  // ESLint 전체에 공유되는 설정을 추가합니다. 플러그인이나 커스텀 규칙에서 이 설정을 사용할 수 있습니다.
  settings: {
    sharedData: "Hello", // 예를 들어, 'sharedData'라는 설정을 'Hello'로 설정했습니다. 이는 플러그인이나 커스텀 규칙에서 사용할 수 있습니다.
  },
};