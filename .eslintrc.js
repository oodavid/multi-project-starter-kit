module.exports = {
  "rules": {
    // Prefer 2 spaces for indentation
    "indent": ["warn", 2],
    // Use unix line-feeds (\n) only
    "linebreak-style": ["error", "unix"],
    // Prefer single-quotes for strings
    "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    // Always use semi-colons
    "semi": ["error", "always"],
    // Multi-line arrays should have a "dangling comma" (makes git diffs easier to read)
    "comma-dangle": ["warn", "always-multiline"],
    // Prevent accidental variable assignment in conditional statements, ie: if(variable="hello")
    "no-cond-assign": ["error", "always"],
    // Don't worry about console; we strip it during minification
    "no-console": "off"
  },
  "env": {
    // Allow es6 features
    "es6": true,
  },
};
