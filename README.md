# illwerkevkw ESLint Configuration

### Prerequisites:
- Install Dev-Dependencies:
  ``` PowerShell
    npm install --save-dev @typescript-eslint/eslint-plugin@^4.21.0 `
      @typescript-eslint/parser@^4.21.0 `
      eslint@^7.23.0 `
      eslint-config-airbnb-typescript@^12.3.1 `
      eslint-config-prettier@^8.1.0 `
      eslint-plugin-import@^2.22.0 `
      eslint-plugin-jest@^24.3.4 `
      eslint-plugin-jsx-a11y@^6.3.1 `
      eslint-plugin-prettier@^3.3.1 `
      eslint-plugin-react@^7.23.1 `
      eslint-plugin-react-hooks@^4.2.0 `
      prettier@^2.2.1 `
      typescript@4.2.4
  ```

- Install Dependencies:
  ``` PowerShell
    npm install react@16.14.0
  ```
  
- Install shared config:
  ``` PowerShell
    npm install --save-dev @vkw/eslint-config@^1.0.4
  ```
  
- U need to provide several Files:  
  - tsconfig.eslint.json:
    ``` JSON
    {
      "extends": "./tsconfig.json",
      "include": [    // Here u need to set all the Paths you have ts or tsx files and not ignored over .eslintignore
        "src/**/*.ts",
        "src/**/*.tsx",
        "stories/**/*.tsx"
      ]
    }
    ```
  
  - .eslintignore
    ```
      # Global Paths
      node_modules
      *.js

      # Project specific paths
      dist
      __mocks__
      storybook
    ```

  - .eslintrc.js
    ``` JavaScript
    module.exports = {
      extends: ["@vkw/eslint-config"],
      overrides: [    // Here u can set your Project specific Overrides
        {
          files: ["testUtils.tsx"],
          rules: {
            "import/no-extraneous-dependencies": "off",
          },
        },
      ],
    };
    ```
    
  - .prettierrc.js
    ``` JavaScript
    module.exports = {
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      quoteProps: 'as-needed',
      jsxSingleQuote: false,
      trailingComma: 'es5',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      arrowParens: 'avoid',
      endOfLine: 'auto',
    };
    ``` 

  - .editorconfig
    ```
    root = true

    [*]
    charset = utf-8
    indent_size = 2
    indent_style = space
    insert_final_newline = true
    max_line_length = 150
    trim_trailing_whitespace = true
    ```  
